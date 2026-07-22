const { v4: uuidv4 } = require('uuid');
const { PLAYERS, GAME_STATUS, ACTIONS, DECK_SIZE, MAX_HAND_SIZE } = require('./constants');

class GameRoom {
  constructor(roomId) {
    this.roomId = roomId;
    this.status = GAME_STATUS.WAITING;
    this.players = {}; // { socketId: playerData }
    this.deck = [];
    this.discardPile = [];
    this.currentRound = 0;
    this.gameHistory = [];
    this.createdAt = new Date();
    this.initializeDeck();
  }

  /**
   * Inizializza il mazzo (40 carte da 1 a 40)
   */
  initializeDeck() {
    this.deck = [];
    for (let i = 1; i <= DECK_SIZE; i++) {
      this.deck.push(i);
    }
    this.shuffleDeck();
  }

  /**
   * Mischia il mazzo (Fisher-Yates shuffle)
   */
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  /**
   * Aggiunge un giocatore alla stanza
   */
  addPlayer(socketId, playerName) {
    if (Object.keys(this.players).length >= 4) {
      return { success: false, message: 'Stanza piena' };
    }

    const roleIndex = Object.keys(this.players).length;
    const role = PLAYERS[Object.keys(PLAYERS)[roleIndex]];

    this.players[socketId] = {
      socketId,
      name: playerName,
      role,
      hand: [],
      score: 0,
      isActive: true,
      joinedAt: new Date()
    };

    return { success: true, role, playerId: socketId };
  }

  /**
   * Rimuove un giocatore dalla stanza
   */
  removePlayer(socketId) {
    if (this.players[socketId]) {
      delete this.players[socketId];
    }

    // Se non ci sono più giocatori, resetta il gioco
    if (Object.keys(this.players).length === 0) {
      this.status = GAME_STATUS.WAITING;
      this.initializeDeck();
    }

    return true;
  }

  /**
   * Estrae una carta dal mazzo
   * Restituisce la carta al giocatore che l'ha richiesta
   */
  drawCard(socketId) {
    if (!this.players[socketId]) {
      return { success: false, message: 'Giocatore non trovato' };
    }

    if (this.deck.length === 0) {
      return { success: false, message: 'Mazzo vuoto' };
    }

    const card = this.deck.pop();
    this.players[socketId].hand.push(card);

    // Log per il server
    this.gameHistory.push({
      action: ACTIONS.DRAW_CARD,
      player: this.players[socketId].name,
      timestamp: new Date(),
      card: card // Salvato server-side per verifica, non inviato agli altri
    });

    return { success: true, card, playerHand: this.players[socketId].hand };
  }

  /**
   * Sostituisce una carta nella mano del giocatore
   */
  substituteCard(socketId, cardPosition, newCard) {
    if (!this.players[socketId]) {
      return { success: false, message: 'Giocatore non trovato' };
    }

    const player = this.players[socketId];
    if (cardPosition < 0 || cardPosition >= player.hand.length) {
      return { success: false, message: 'Posizione carta non valida' };
    }

    const oldCard = player.hand[cardPosition];
    player.hand[cardPosition] = newCard;
    this.discardPile.push(oldCard);

    this.gameHistory.push({
      action: ACTIONS.SUBSTITUTE_CARD,
      player: player.name,
      timestamp: new Date(),
      oldCard,
      newCard
    });

    return { success: true, playerHand: player.hand };
  }

  /**
   * Ritorna lo stato del gioco filtrato per un giocatore specifico
   * Le carte degli altri giocatori rimangono nascoste
   */
  getGameStateForPlayer(socketId) {
    const player = this.players[socketId];
    if (!player) return null;

    return {
      roomId: this.roomId,
      status: this.status,
      currentRound: this.currentRound,
      deckSize: this.deck.length,
      discardPileSize: this.discardPile.length,
      
      // Info del giocatore corrente (completa)
      myPlayer: {
        socketId: player.socketId,
        name: player.name,
        role: player.role,
        hand: player.hand,
        score: player.score
      },

      // Info degli altri giocatori (solo dati pubblici)
      otherPlayers: Object.values(this.players)
        .filter(p => p.socketId !== socketId)
        .map(p => ({
          socketId: p.socketId,
          name: p.name,
          role: p.role,
          handSize: p.hand.length, // Solo il numero di carte, non le carte stesse
          score: p.score,
          isActive: p.isActive
        }))
    };
  }

  /**
   * Ritorna lo stato pubblico della stanza (senza informazioni sensibili)
   */
  getPublicState() {
    return {
      roomId: this.roomId,
      status: this.status,
      playerCount: Object.keys(this.players).length,
      players: Object.values(this.players).map(p => ({
        name: p.name,
        role: p.role,
        handSize: p.hand.length,
        score: p.score
      })),
      deckSize: this.deck.length
    };
  }

  /**
   * Verifica se tutti i giocatori sono pronti per iniziare
   */
  canStartGame() {
    return Object.keys(this.players).length === 4 && this.status === GAME_STATUS.WAITING;
  }

  /**
   * Avvia il gioco
   */
  startGame() {
    if (!this.canStartGame()) {
      return { success: false, message: 'Non ci sono abbastanza giocatori' };
    }

    this.status = GAME_STATUS.PLAYING;
    this.currentRound = 1;
    this.initializeDeck();

    // Distribuisci 4 carte iniziali a ogni giocatore
    Object.values(this.players).forEach(player => {
      for (let i = 0; i < MAX_HAND_SIZE; i++) {
        if (this.deck.length > 0) {
          player.hand.push(this.deck.pop());
        }
      }
    });

    this.gameHistory.push({
      action: ACTIONS.GAME_STARTED,
      timestamp: new Date()
    });

    return { success: true, message: 'Gioco avviato' };
  }

  /**
   * Termina il gioco
   */
  endGame() {
    this.status = GAME_STATUS.FINISHED;
    this.gameHistory.push({
      action: ACTIONS.GAME_ENDED,
      timestamp: new Date()
    });
  }

  /**
   * Restituisce la cronologia del gioco (filtrando le informazioni sensibili)
   */
  getGameHistory() {
    return this.gameHistory.map(entry => {
      const filtered = { ...entry };
      if (entry.card) delete filtered.card; // Non includere le carte specifiche nella storia pubblica
      if (entry.oldCard) delete filtered.oldCard;
      if (entry.newCard) delete filtered.newCard;
      return filtered;
    });
  }
}

module.exports = GameRoom;
