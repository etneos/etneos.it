/**
 * socket-handler.js
 * Multiplayer client
 * UI Refactoring v2 - Complete rewrite
 */

//======================================================
// CONFIGURAZIONE
//======================================================

const BACKEND_URL = 'https://nineteen10-backend.onrender.com';


//======================================================
// VARIABILI GLOBALI
//======================================================

let socket = null;

let currentRoomId = null;
let currentPlayerId = null;
let currentPlayerRole = null;

let isConnected = false;

let myHand = [];


//======================================================
// COSTANTI UI
//======================================================

const ROLE_ORDER = [
    "alpha",
    "beta",
    "lambda",
    "delta"
];

const RELATIVE_PANELS = [
    "Player1",
    "Player2",
    "Player3"
];

const ROLE_DISPLAY_NAMES = {
    "alpha": "α",
    "beta": "β",
    "lambda": "λ",
    "delta": "δ"
};


//======================================================
// CACHE DOM
//======================================================

const playerPanels = {
    alpha: document.getElementById("Player_Alpha"),
    Player1: document.getElementById("Player1"),
    Player2: document.getElementById("Player2"),
    Player3: document.getElementById("Player3")
};


//======================================================
// MAPPING RUOLI -> PANNELLI (COORDINAMENTO POSIZIONI)
//======================================================

/**
 * Mappa il ruolo di un altro giocatore al pannello relativo
 * Basato sulla posizione circolare dei ruoli
 */
function getPlayerElement(myRole, otherRole) {
    if (!myRole || !otherRole) return null;

    // Se è lo stesso ruolo (il giocatore stesso)
    if (myRole === otherRole) return playerPanels.alpha;

    const myIndex = ROLE_ORDER.indexOf(myRole);
    const otherIndex = ROLE_ORDER.indexOf(otherRole);

    if (myIndex < 0 || otherIndex < 0) return null;

    // Calcolo posizione relativa in senso orario
    const relativeSeat = (otherIndex - myIndex + ROLE_ORDER.length) % ROLE_ORDER.length;

    // relativeSeat = 0 -> è il giocatore stesso (già gestito sopra)
    // relativeSeat 1..3 -> i tre avversari (sinistra, sopra, destra)
    if (relativeSeat < 1 || relativeSeat > 3) return null;

    return playerPanels[RELATIVE_PANELS[relativeSeat - 1]];
}


//======================================================
// UTILITY UI - ACCESSO AGLI ELEMENTI
//======================================================

/**
 * Ottiene l'elemento nome giocatore da un pannello
 */
function getPlayerNameElement(panel) {
    if (!panel) return null;
    return panel.querySelector(".plname");
}


/**
 * Ottiene tutte le immagini delle carte da un pannello
 */
function getPlayerCards(panel) {
    if (!panel) return [];
    return panel.querySelectorAll("img.retro");
}


/**
 * Ottiene il prefisso della carta in base al ruolo
 * (per accedere agli elementi <img name="pl{prefix}_{n}">)
 */
function getCardImagePrefix(role) {
    switch (role) {
        case 'beta': return '2';
        case 'lambda': return '3';
        case 'delta': return '4';
        default: return '';
    }
}


//======================================================
// UTILITY UI - MANIPOLAZIONE ELEMENTI
//======================================================

/**
 * Pulisce completamente un pannello avversario
 * (nasconde tutte le carte e il nome)
 */
function clearOpponentPanel(panel) {
    if (!panel) return;

    // Nascondi il nome
    const name = getPlayerNameElement(panel);
    if (name) {
        name.textContent = "";
    }

    // Nascondi tutte le carte
    getPlayerCards(panel).forEach(card => {
        card.style.display = "none";
        card.style.opacity = "1";
    });
}


/**
 * Mostra i dorsi delle carte (numero specificato)
 * Utilizzato per gli avversari di cui non conosciamo le carte
 */
function showCardBacks(panel, handSize) {
    if (!panel) return;

    const cards = getPlayerCards(panel);

    cards.forEach((card, index) => {
        if (index < handSize) {
            card.style.display = "block";
            card.style.opacity = "1";
        } else {
            card.style.display = "none";
        }
    });
}


/**
 * Aggiorna il nome del giocatore in un pannello
 */
function updatePlayerName(panel, playerName, playerRole) {
    if (!panel) return;

    const nameElement = getPlayerNameElement(panel);
    if (nameElement) {
        const roleSymbol = ROLE_DISPLAY_NAMES[playerRole] || playerRole;
        nameElement.textContent = `${playerName} (${roleSymbol})`;
    }
}


/**
 * Effetto visivo: anima la selezione di una carta
 */
function animateCardSelection(panel, index) {
    const cards = getPlayerCards(panel);
    if (cards[index]) {
        cards[index].style.opacity = '0.5';
        setTimeout(() => {
            cards[index].style.opacity = '1';
        }, 300);
    }
}


//======================================================
// SOCKET.IO INITIALIZATION & EVENTS
//======================================================

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
        renderPlayers(data.publicState);
    });

    // Evento: Giocatore esce dalla stanza
    socket.on('player-left', (data) => {
        console.log(`${data.playerName} ha lasciato il gioco`);
        updatePlayerList(data.publicState);
        showNotification(`${data.playerName} ha lasciato il gioco`);
        renderPlayers(data.publicState);
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
        // Nascondi il pannello di setup, mostra il gioco
        document.getElementById('game-setup-panel').style.display = 'none';
        document.getElementById('game-board').style.display = 'block';
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
        animateCardSubstitutedByOpponent(data.playerRole, data.position);
    });

    // Gestione errori
    socket.on('error', (error) => {
        console.error('❌ Errore Socket.io:', error);
        showNotification(`Errore: ${error}`, 'error');
    });
}


//======================================================
// SOCKET.IO EMITTERS
//======================================================

/**
 * Unisce il giocatore a una stanza di gioco
 */
function joinGame(playerName) {
    if (!isConnected) {
        showNotification('Non connesso al server', 'error');
        return;
    }

    // Legge il roomId dall'input HTML o ne genera uno
    const roomIdInput = document.getElementById('room-id');
    if (roomIdInput && roomIdInput.value.trim()) {
        currentRoomId = roomIdInput.value.trim();
    } else {
        currentRoomId = 'room-' + Math.random().toString(36).substr(2, 9);
        if (roomIdInput) {
            roomIdInput.value = currentRoomId;
            roomIdInput.disabled = true;
        }
    }

    console.log(`Tentativo di join alla stanza: ${currentRoomId}`);

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
 * Inizia il gioco
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
 * Estrae una carta dal mazzo
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
            myHand = response.playerHand;
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
            myHand = response.playerHand;
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


//======================================================
// GAME STATE MANAGEMENT
//======================================================

/**
 * Aggiorna lo stato completo del gioco
 */
function updateGameState(gameState) {
    if (!gameState) return;

    console.log('📊 Stato gioco aggiornato:', gameState);

    // Aggiorna il round corrente
    if (typeof gameState.currentRound !== 'undefined') {
        currentRound = gameState.currentRound;
    }

    // Mostra la mano del giocatore corrente
    if (gameState.myPlayer) {
        currentPlayerRole = gameState.myPlayer.role;
        myHand = gameState.myPlayer.hand;
        updateMyHand(gameState.myPlayer.hand);

        const youElement = document.getElementById('YOU');
        if (youElement) {
            youElement.innerText = `${gameState.myPlayer.name} (${ROLE_DISPLAY_NAMES[gameState.myPlayer.role] || gameState.myPlayer.role})`;
        }
    }

    // Renderizza gli altri giocatori
    if (gameState.otherPlayers && gameState.otherPlayers.length > 0) {
        renderPlayers(gameState);
    }

    // Aggiorna il mazzo
    if (typeof gameState.deckSize !== 'undefined') {
        updateDeckSize(gameState.deckSize);
    }
}


//======================================================
// UI RENDERING (UNIFIED LAYER)
//======================================================

/**
 * UNICO PUNTO DI RENDER: Renderizza TUTTI i giocatori nella UI
 * 
 * Questo è l'UNICO metodo che gestisce la visualizzazione dei giocatori.
 * Riceve i dati di stato (gameState o publicState) e:
 * 1. Pulisce tutti i pannelli avversari
 * 2. Renderizza ogni giocatore nel pannello appropriato
 * 3. Gestisce correttamente il mapping ruoli -> posizioni
 */
function renderPlayers(stateData) {
    if (!currentPlayerRole) {
        console.warn('⚠️ renderPlayers: ruolo del giocatore non impostato');
        return;
    }

    // Estrai l'array dei giocatori da gameState o publicState
    let playersToRender = [];
    if (stateData.otherPlayers) {
        // Viene da gameState (singolo giocatore)
        playersToRender = stateData.otherPlayers;
    } else if (stateData.players) {
        // Viene da publicState (tutti i giocatori)
        playersToRender = stateData.players.filter(p => p.role !== currentPlayerRole);
    }

    console.log(`🎨 Rendering ${playersToRender.length} giocatori avversari`);

    // Step 1: Pulisci completamente i tre pannelli avversari
    [playerPanels.Player1, playerPanels.Player2, playerPanels.Player3].forEach(panel => {
        clearOpponentPanel(panel);
    });

    // Step 2: Renderizza ogni giocatore avversario
    playersToRender.forEach(player => {
        // Salta il giocatore stesso (dovrebbe già essere filtrato, ma per sicurezza)
        if (player.role === currentPlayerRole) {
            return;
        }

        // Ottieni il pannello corretto per questo giocatore
        const panel = getPlayerElement(currentPlayerRole, player.role);
        if (!panel) {
            console.warn(`⚠️ Pannello non trovato per ruolo: ${player.role}`);
            return;
        }

        // Aggiorna il nome del giocatore nel pannello
        updatePlayerName(panel, player.name, player.role);

        // Mostra le carte (dorsi) in base alla dimensione della mano
        const handSize = player.handSize || 0;
        showCardBacks(panel, handSize);

        console.log(`  ✓ ${player.name} (${player.role}) renderizzato con ${handSize} carte`);
    });
}


/**
 * Aggiorna la mano del giocatore corrente (carte visibili solo a lui)
 */
function updateMyHand(hand) {
    if (!hand || !Array.isArray(hand)) {
        console.warn('⚠️ updateMyHand: mano non valida');
        return;
    }

    console.log('🎴 La tua mano aggiornata:', hand);

    for (let i = 0; i < hand.length; i++) {
        const imgElement = document.querySelector(`img[name="plx${i + 1}"]`);
        if (imgElement) {
            imgElement.dataset.card = hand[i];
            imgElement.title = `Carta: ${hand[i]}`;
        }
    }
}


/**
 * Mostra la carta estratta dal giocatore corrente
 */
function displayMyCard(cardNumber) {
    const youestraElement = document.getElementById('youestraz');
    if (youestraElement) {
        youestraElement.dataset.card = cardNumber;
        youestraElement.title = `Carta estratta: ${cardNumber}`;
        youestraElement.style.opacity = '1';
        
        // Fade out dopo 2 secondi
        setTimeout(() => {
            youestraElement.style.opacity = '0.5';
        }, 2000);
    }
}


/**
 * Anima l'estrazione di una carta da parte di un avversario
 */
function animateCardDrawnByOpponent(playerRole) {
    const panel = getPlayerElement(currentPlayerRole, playerRole);
    if (panel) {
        panel.style.opacity = '0.7';
        setTimeout(() => {
            panel.style.opacity = '1';
        }, 300);
    }
}


/**
 * Anima la sostituzione di una carta da parte di un avversario
 */
function animateCardSubstitutedByOpponent(playerRole, position) {
    const panel = getPlayerElement(currentPlayerRole, playerRole);
    if (!panel) return;

    const cards = getPlayerCards(panel);
    if (cards[position]) {
        animateCardSelection(panel, position);
    }
}


//======================================================
// SUPPORT UI FUNCTIONS
//======================================================

/**
 * Aggiorna la lista dei giocatori in attesa (pannello di setup)
 */
function updatePlayerList(publicState) {
    console.log('🎮 Giocatori nella stanza:', publicState.players);

    const playersWaitingDiv = document.getElementById('players-waiting');
    if (playersWaitingDiv) {
        let html = `<p><strong>Giocatori connessi: ${publicState.playerCount || 0}/4</strong></p>`;
        publicState.players.forEach(p => {
            const roleSymbol = ROLE_DISPLAY_NAMES[p.role] || p.role;
            html += `<p>• ${p.name} (${roleSymbol})</p>`;
        });
        playersWaitingDiv.innerHTML = html;
    }
}


/**
 * Aggiorna la visualizzazione della dimensione del mazzo
 */
function updateDeckSize(size) {
    console.log(`📚 Carte rimaste nel mazzo: ${size}`);
    // Opzionale: implementare visualizzazione numero carte rimaste
}


/**
 * Mostra una notifica all'utente
 */
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Implementazione di notifiche visive (toast, alert, ecc.)
    // Attualmente solo logging
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
 * Disabilita i controlli di join
 */
function disableJoinUI() {
    const joinButton = document.getElementById('join-button');
    const playerNameInput = document.getElementById('player-name');
    if (joinButton) joinButton.disabled = true;
    if (playerNameInput) playerNameInput.disabled = true;
}


/**
 * Abilita il pulsante di start
 */
function enableStartButton() {
    const startButton = document.getElementById('start-button');
    if (startButton) startButton.disabled = false;
}


//======================================================
// WINDOW LOAD EVENT
//======================================================

/**
 * Inizializzazione quando la pagina carica
 */
window.addEventListener('load', () => {
    console.log('📡 Inizializzazione Socket.io...');
    initializeSocket();

    // Se c'è un roomId nell'URL, lo carica automaticamente
    const params = new URLSearchParams(window.location.search);
    const roomIdFromUrl = params.get('room');
    if (roomIdFromUrl) {
        const roomIdInput = document.getElementById('room-id');
        if (roomIdInput) {
            roomIdInput.value = roomIdFromUrl;
            roomIdInput.disabled = true;
        }
    }
});
