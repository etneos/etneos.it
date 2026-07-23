const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const GameRoom = require('./gameRoom');
const { PLAYERS, GAME_STATUS, ACTIONS } = require('./constants');

// Inizializzazione Express e Socket.io
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// evitare disattivazione del cron-job per disattivazione con 404 not found
app.get('/', (req, res) => res.status(200).send('Server attivo!'));

// Middleware
app.use(cors());
app.use(express.json());

// Memoria delle stanze di gioco
const gameRooms = new Map();
const socketToRoom = new Map(); // Mappa socket.id -> roomId

// ============================================
// ENDPOINTS REST (optional, per info generali)
// ============================================

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.get('/api/rooms', (req, res) => {
  const rooms = Array.from(gameRooms.values()).map(room => room.getPublicState());
  res.json({ rooms });
});

// ============================================
// SOCKET.IO EVENTS
// ============================================

io.on('connection', (socket) => {
  console.log(`[CONNECT] Socket ID: ${socket.id}`);

  /**
   * Evento: Giocatore richiede di unirsi a una stanza
   * Client invia: { roomId, playerName }
   */
  socket.on('join-room', (data, callback) => {
    const { roomId, playerName } = data;

    if (!roomId || !playerName) {
      return callback({ success: false, message: 'roomId e playerName sono obbligatori' });
    }

    try {
      // Crea la stanza se non esiste
      if (!gameRooms.has(roomId)) {
        gameRooms.set(roomId, new GameRoom(roomId));
        console.log(`[ROOM CREATED] ${roomId}`);
      }

      const room = gameRooms.get(roomId);

      // Aggiungi il giocatore
      const result = room.addPlayer(socket.id, playerName);
      if (!result.success) {
        return callback({ success: false, message: result.message });
      }

      // Registra il socket nella stanza
      socket.join(roomId);
      socketToRoom.set(socket.id, roomId);

      console.log(`[PLAYER JOINED] ${playerName} (${result.role}) in room ${roomId}`);

      // Invia al giocatore il suo stato personale
      callback({
        success: true,
        playerId: socket.id,
        role: result.role,
        gameState: room.getGameStateForPlayer(socket.id)
      });

      // Notifica agli altri giocatori che qualcuno si è unito
      socket.to(roomId).emit('player-joined', {
        playerName,
        role: result.role,
        totalPlayers: Object.keys(room.players).length,
        publicState: room.getPublicState()
      });

      // Se sono 4 giocatori, notifica che il gioco può iniziare
      if (Object.keys(room.players).length === 4) {
        io.to(roomId).emit('ready-to-start', {
          message: '4 giocatori pronti. Attendere per iniziare...'
        });
      }

    } catch (error) {
      console.error('[ERROR] join-room:', error);
      callback({ success: false, message: 'Errore interno del server' });
    }
  });

  /**
   * Evento: Inizia il gioco
   */
  socket.on('start-game', (data, callback) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId) {
      return callback({ success: false, message: 'Non sei in una stanza' });
    }

    const room = gameRooms.get(roomId);
    const result = room.startGame();

    if (!result.success) {
      return callback(result);
    }

    console.log(`[GAME STARTED] Room: ${roomId}`);

    // Invia lo stato iniziale a tutti i giocatori
    io.to(roomId).emit('game-started', {
      message: 'Il gioco è iniziato!',
      currentRound: room.currentRound,
      deckSize: room.deck.length
    });

    callback({ success: true, message: 'Gioco avviato' });
  });

  /**
   * Evento: Estrai una carta (solo per il giocatore che la richiede)
   */
  socket.on('draw-card', (data, callback) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId) {
      return callback({ success: false, message: 'Non sei in una stanza' });
    }

    const room = gameRooms.get(roomId);
    const result = room.drawCard(socket.id);

    if (!result.success) {
      return callback(result);
    }

    console.log(`[CARD DRAWN] Player: ${room.players[socket.id].name}, Card: ${result.card}`);

    // Invia la carta SOLO al giocatore che l'ha estratta
    callback({
      success: true,
      card: result.card,
      playerHand: result.playerHand
    });

    // Notifica agli altri che qualcuno ha estratto (senza rivelare la carta)
    socket.to(roomId).emit('card-drawn-by-player', {
      playerRole: room.players[socket.id].role,
      playerName: room.players[socket.id].name,
      deckSize: room.deck.length
    });
  });

  /**
   * Evento: Sostituisci una carta in mano
   */
  socket.on('substitute-card', (data, callback) => {
    const { cardPosition, newCard } = data;
    const roomId = socketToRoom.get(socket.id);

    if (!roomId) {
      return callback({ success: false, message: 'Non sei in una stanza' });
    }

    const room = gameRooms.get(roomId);
    const result = room.substituteCard(socket.id, cardPosition, newCard);

    if (!result.success) {
      return callback(result);
    }

    console.log(`[CARD SUBSTITUTED] Player: ${room.players[socket.id].name}, Position: ${cardPosition}`);

    // Invia conferma al giocatore
    callback({
      success: true,
      playerHand: result.playerHand
    });

    // Notifica agli altri che è stata scambiata una carta (senza rivelare quale)
    socket.to(roomId).emit('card-substituted-by-player', {
      playerRole: room.players[socket.id].role,
      playerName: room.players[socket.id].name,
      position: cardPosition,
      discardPileSize: room.discardPile.length
    });
  });

  /**
   * Evento: Richiedi lo stato completo del gioco
   */
  socket.on('get-game-state', (data, callback) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId) {
      return callback({ success: false, message: 'Non sei in una stanza' });
    }

    const room = gameRooms.get(roomId);
    callback({
      success: true,
      gameState: room.getGameStateForPlayer(socket.id)
    });
  });

  /**
   * Evento: Disconnessione
   */
  socket.on('disconnect', () => {
    const roomId = socketToRoom.get(socket.id);

    if (roomId) {
      const room = gameRooms.get(roomId);
      const playerName = room.players[socket.id]?.name || 'Sconosciuto';

      room.removePlayer(socket.id);
      socketToRoom.delete(socket.id);

      console.log(`[DISCONNECT] ${playerName} from room ${roomId}`);

      // Notifica agli altri
      io.to(roomId).emit('player-left', {
        playerName,
        remainingPlayers: Object.keys(room.players).length,
        publicState: room.getPublicState()
      });

      // Elimina la stanza se vuota
      if (Object.keys(room.players).length === 0) {
        gameRooms.delete(roomId);
        console.log(`[ROOM DELETED] ${roomId}`);
      }
    }

    console.log(`[DISCONNECTED] Socket ID: ${socket.id}`);
  });

  /**
   * Evento: Errore
   */
  socket.on('error', (error) => {
    console.error('[SOCKET ERROR]:', error);
  });
});

// ============================================
// AVVIO SERVER
// ============================================

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🎮 Nineteen10 Multiplayer Server avviato sulla porta ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Gestione errori non catturati
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

module.exports = { app, io };
