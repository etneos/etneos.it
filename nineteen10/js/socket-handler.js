/**
 * socket-handler.js
 * Gestisce la comunicazione Socket.io tra il client (gioco) e il backend multiplayer
 */

// Configurazione del server
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

// Variabili globali
let socket;
let currentRoomId;
let currentPlayerId;
let currentPlayerRole;
let isConnected = false;

/**
 * Inizializza la connessione Socket.io
 */
function initializeSocket() {
  socket = io(BACKEND_URL, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5
  });

  // Evento: Connessione riuscita
  socket.on('connect', () => {
    console.log('✅ Connesso al server multiplayer');
    isConnected = true;
    updateConnectionStatus(true);
  });

  // Evento: Disconnessione
  socket.on('disconnect', () => {
    console.log('❌ Disconnesso dal server');
    isConnected = false;
    updateConnectionStatus(false);
  });

  // Evento: Giocatore si unisce alla stanza
  socket.on('player-joined', (data) => {
    console.log(`${data.playerName} (${data.role}) si è unito al gioco`);
    updatePlayerList(data.publicState);
    showNotification(`${data.playerName} si è unito al gioco`);
  });

  // Evento: Giocatore esce dalla stanza
  socket.on('player-left', (data) => {
    console.log(`${data.playerName} ha lasciato il gioco`);
    updatePlayerList(data.publicState);
    showNotification(`${data.playerName} ha lasciato il gioco`);
  });

  // Evento: Il gioco è pronto per iniziare
  socket.on('ready-to-start', (data) => {
    console.log(data.message);
    showNotification('🎮 Tutti i giocatori sono pronti! Il gioco può iniziare.');
    enableStartButton();
  });

  // Evento: Il gioco è iniziato
  socket.on('game-started', (data) => {
    console.log('🎮 Il gioco è iniziato!');
    currentRound = data.currentRound;
    showNotification('Il gioco è iniziato!');
  });

  // Evento: Un altro giocatore ha estratto una carta
  socket.on('card-drawn-by-player', (data) => {
    console.log(`${data.playerName} (${data.playerRole}) ha estratto una carta`);
    showNotification(`${data.playerName} ha estratto una carta`);
    updateDeckSize(data.deckSize);
    animateCardDrawnByOpponent(data.playerRole);
  });

  // Evento: Un altro giocatore ha sostituito una carta
  socket.on('card-substituted-by-player', (data) => {
    console.log(`${data.playerName} ha sostituito una carta in posizione ${data.position}`);
    updatePlayerCardUI(data.playerRole, data.position);
  });

  // Gestione errori
  socket.on('error', (error) => {
    console.error('❌ Errore Socket.io:', error);
    showNotification(`Errore: ${error}`, 'error');
  });
}

/**
 * Unisce il giocatore a una stanza di gioco
 */
function joinGame(playerName) {
  if (!isConnected) {
    showNotification('Non connesso al server', 'error');
    return;
  }

  // Genera o usa un roomId esistente
  if (!currentRoomId) {
    currentRoomId = 'room-' + Math.random().toString(36).substr(2, 9);
  }

  socket.emit('join-room', {
    roomId: currentRoomId,
    playerName: playerName
  }, (response) => {
    if (response.success) {
      currentPlayerId = response.playerId;
      currentPlayerRole = response.role;
      console.log(`✅ Ti sei unito al gioco come ${response.role}`);
      showNotification(`Sei entrato come ${response.role}`);
      updateGameState(response.gameState);
      disableJoinUI();
    } else {
      console.error('❌ Errore join:', response.message);
      showNotification(`Errore: ${response.message}`, 'error');
    }
  });
}

/**
 * Inizia il gioco (da chiamare quando tutti i 4 giocatori sono pronti)
 */
function startGame() {
  if (!isConnected) {
    showNotification('Non connesso al server', 'error');
    return;
  }

  socket.emit('start-game', {}, (response) => {
    if (response.success) {
      console.log('✅ Gioco avviato');
    } else {
      console.error('❌ Errore start-game:', response.message);
      showNotification(`Errore: ${response.message}`, 'error');
    }
  });
}

/**
 * Estrae una carta dal mazzo (solo per questo giocatore)
 */
function drawCard() {
  if (!isConnected) {
    showNotification('Non connesso al server', 'error');
    return;
  }

  socket.emit('draw-card', {}, (response) => {
    if (response.success) {
      console.log(`✅ Hai estratto: ${response.card}`);
      showNotification(`Hai estratto la carta: ${response.card}`);
      
      // Mostra la carta SOLO a questo giocatore
      displayMyCard(response.card);
      
      // Aggiorna la mano locale
      updateMyHand(response.playerHand);
    } else {
      console.error('❌ Errore draw-card:', response.message);
      showNotification(`Errore: ${response.message}`, 'error');
    }
  });
}

/**
 * Sostituisce una carta in mano
 */
function substituteCard(cardPosition, newCard) {
  if (!isConnected) {
    showNotification('Non connesso al server', 'error');
    return;
  }

  socket.emit('substitute-card', {
    cardPosition: cardPosition,
    newCard: newCard
  }, (response) => {
    if (response.success) {
      console.log(`✅ Carta sostituita in posizione ${cardPosition}`);
      updateMyHand(response.playerHand);
    } else {
      console.error('❌ Errore substitute-card:', response.message);
      showNotification(`Errore: ${response.message}`, 'error');
    }
  });
}

/**
 * Richiede lo stato completo del gioco
 */
function requestGameState() {
  if (!isConnected) return;

  socket.emit('get-game-state', {}, (response) => {
    if (response.success) {
      updateGameState(response.gameState);
    }
  });
}

/**
 * ========================================
 * FUNZIONI UI (da integrare in nineteen10.js)
 * ========================================
 */

/**
 * Aggiorna lo stato completo del gioco
 */
function updateGameState(gameState) {
  if (!gameState) return;

  console.log('📊 Stato gioco aggiornato:', gameState);

  // Aggiorna i dati globali
  currentRound = gameState.currentRound;

  // Mostra la mano del giocatore corrente
  if (gameState.myPlayer) {
    updateMyHand(gameState.myPlayer.hand);
    document.getElementById('YOU').innerText = `${gameState.myPlayer.name} (${gameState.myPlayer.role})`;
  }

  // Mostra gli altri giocatori
  if (gameState.otherPlayers && gameState.otherPlayers.length > 0) {
    updateOtherPlayers(gameState.otherPlayers);
  }

  // Aggiorna il mazzo
  updateDeckSize(gameState.deckSize);
}

/**
 * Aggiorna la mano del giocatore corrente
 */
function updateMyHand(hand) {
  console.log('🎴 La tua mano:', hand);
  // Qui implementerai la logica per mostrare le carte nella UI
  // Esempio: aggiorna gli elementi <img name="plx1">, <img name="plx2">, ecc.
  for (let i = 0; i < hand.length; i++) {
    const imgElement = document.querySelector(`img[name="plx${i + 1}"]`);
    if (imgElement) {
      // Mostra il numero della carta o un'immagine appropriata
      imgElement.dataset.card = hand[i];
      imgElement.title = `Carta: ${hand[i]}`;
    }
  }
}

/**
 * Aggiorna la lista degli altri giocatori
 */
function updateOtherPlayers(otherPlayers) {
  console.log('👥 Altri giocatori:', otherPlayers);

  otherPlayers.forEach((player) => {
    const playerElement = getPlayerElement(player.role);
    if (playerElement) {
      // Aggiorna il nome
      const nameElement = playerElement.querySelector('.plname');
      if (nameElement) {
        nameElement.innerText = `${player.name} (${player.role})`;
      }

      // Mostra il numero di carte (dorsi)
      const cardContainers = playerElement.querySelectorAll('img.retro');
      cardContainers.forEach((card, index) => {
        if (index < player.handSize) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
}

/**
 * Trova l'elemento della UI corrispondente al ruolo
 */
function getPlayerElement(role) {
  switch (role) {
    case 'beta':
      return document.getElementById('Player1');
    case 'lambda':
      return document.getElementById('Player2');
    case 'delta':
      return document.getElementById('Player3');
    case 'alpha':
      return document.getElementById('Player_Alpha');
    default:
      return null;
  }
}

/**
 * Mostra una carta estratta (solo al giocatore che l'ha estratta)
 */
function displayMyCard(cardNumber) {
  const youestraElement = document.getElementById('youestraz');
  if (youestraElement) {
    youestraElement.dataset.card = cardNumber;
    youestraElement.title = `Carta estratta: ${cardNumber}`;
    youestraElement.style.opacity = '1';
    // Opzionale: animazione di transizione
    setTimeout(() => {
      youestraElement.style.opacity = '0.5';
    }, 2000);
  }
}

/**
 * Anima l'estrazione di una carta da parte di un avversario
 */
function animateCardDrawnByOpponent(playerRole) {
  const playerElement = getPlayerElement(playerRole);
  if (playerElement) {
    playerElement.style.opacity = '0.7';
    setTimeout(() => {
      playerElement.style.opacity = '1';
    }, 300);
  }
}

/**
 * Aggiorna la UI della carta di un avversario
 */
function updatePlayerCardUI(playerRole, position) {
  const playerElement = getPlayerElement(playerRole);
  if (playerElement) {
    const cardElement = playerElement.querySelector(`img[name="pl${getPlayerPrefix(playerRole)}_${position}"]`);
    if (cardElement) {
      cardElement.style.opacity = '0.5';
      setTimeout(() => {
        cardElement.style.opacity = '1';
      }, 200);
    }
  }
}

/**
 * Ottenere il prefisso del nome dell'immagine in base al ruolo
 */
function getPlayerPrefix(role) {
  switch (role) {
    case 'beta':
      return '2';
    case 'lambda':
      return '3';
    case 'delta':
      return '4';
    default:
      return '';
  }
}

/**
 * Aggiorna la dimensione del mazzo
 */
function updateDeckSize(size) {
  console.log(`📚 Carte rimaste nel mazzo: ${size}`);
  // Opzionale: mostra il numero di carte rimaste
}

/**
 * Aggiorna la lista dei giocatori connessi
 */
function updatePlayerList(publicState) {
  console.log('🎮 Giocatori nella stanza:', publicState.players);
}

/**
 * Mostra una notifica all'utente
 */
function showNotification(message, type = 'info') {
  console.log(`[${type.toUpperCase()}] ${message}`);
  // Opzionale: implementa un sistema di notifiche visive
  // Esempio: toast, alert, ecc.
}

/**
 * Aggiorna lo stato della connessione nella UI
 */
function updateConnectionStatus(isConnected) {
  const statusElement = document.getElementById('connection-status');
  if (statusElement) {
    statusElement.innerText = isConnected ? '🟢 Connesso' : '🔴 Disconnesso';
    statusElement.style.color = isConnected ? 'green' : 'red';
  }
}

/**
 * Disabilita l'interfaccia di join
 */
function disableJoinUI() {
  const joinButton = document.getElementById('join-button');
  if (joinButton) joinButton.disabled = true;
}

/**
 * Abilita il pulsante di start
 */
function enableStartButton() {
  const startButton = document.getElementById('start-button');
  if (startButton) startButton.disabled = false;
}

/**
 * Inizializza tutto quando la pagina carica
 */
window.addEventListener('load', () => {
  console.log('📡 Inizializzazione Socket.io...');
  initializeSocket();
});
