# 🎮 Nineteen10 Multiplayer Backend

Backend Socket.io per il gioco di carte multiplayer Nineteen10.

## 📋 Descrizione

Questo è il server backend per gestire le partite multiplayer del gioco Nineteen10. Utilizza **Socket.io** per la comunicazione real-time tra i client e gestisce:

- Creazione dinamica di stanze di gioco
- Sincronizzazione dello stato del gioco
- Privacy delle carte (ogni giocatore vede solo le proprie)
- Gestione dei giocatori e delle disconnessioni
- Logica del mazzo e delle estrazioni

## 🚀 Installazione

### Prerequisiti
- Node.js 18+ (scarica da [nodejs.org](https://nodejs.org/))
- npm (incluso con Node.js)

### Passi di installazione

1. **Clona il repository** (se non l'hai già fatto):
```bash
git clone https://github.com/etneos/etneos.it.git
cd etneos.it/backend
```

2. **Installa le dipendenze**:
```bash
npm install
```

3. **Crea il file `.env`**:
```bash
cp .env.example .env
```

4. **Modifica `.env` se necessario** (di default è già configurato per sviluppo locale):
```env
PORT=3000
NODE_ENV=development
BACKEND_URL=http://localhost:3000
```

## 🎯 Avvio locale

### Modalità Development (con auto-reload)
```bash
npm run dev
```

### Modalità Production
```bash
npm start
```

Dovresti vedere:
```
🎮 Nineteen10 Multiplayer Server avviato sulla porta 3000
Environment: development
```

Visita `http://localhost:3000/api/health` per verificare che il server sia attivo.

## 📡 Deploy su Render.com

### Step 1: Prepara il repository
Assicurati che il backend sia nella cartella `/backend` e che il `package.json` sia al suo interno.

### Step 2: Crea un Web Service su Render

1. Vai su [render.com](https://render.com)
2. Fai login con il tuo account GitHub
3. Clicca **"New +"** → **"Web Service"**
4. Seleziona il repository `etneos/etneos.it`
5. Configura:

| Campo | Valore |
|-------|--------|
| **Name** | `nineteen10-backend` |
| **Environment** | `Node` |
| **Build Command** | `cd backend && npm install` |
| **Start Command** | `cd backend && npm start` |
| **Plan** | `Free` |
| **Auto-deploy** | `Yes` |

### Step 3: Configura le variabili d'ambiente

Nella sezione **"Environment"** aggiungi:

```
PORT=3000
NODE_ENV=production
BACKEND_URL=https://nineteen10-backend.onrender.com
```

(Sostituisci `nineteen10-backend` con il nome che scegli)

### Step 4: Deploy

Clicca **"Create Web Service"** e Render inizierà il deploy automaticamente.

Quando termina, riceverai un URL pubblico tipo:
```
https://nineteen10-backend.onrender.com
```

## 🔌 Configurazione del Client

Dopo il deploy, aggiorna il file `socket-handler.js` nel client:

```javascript
// Cambia da:
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

// A:
const BACKEND_URL = 'https://nineteen10-backend.onrender.com'; // Il tuo URL Render
```

Oppure usa una variabile d'ambiente nel HTML (consigliato):

```html
<script>
  window.BACKEND_URL = 'https://nineteen10-backend.onrender.com';
</script>
<script src="js/socket-handler.js"></script>
```

## 📚 Struttura dei File

```
backend/
├── server.js           # Server principale con Socket.io
├── gameRoom.js         # Logica del gioco e gestione stato
├── constants.js        # Costanti (ruoli, stati, azioni)
├── package.json        # Dipendenze Node.js
├── .env.example        # Variabili d'ambiente di esempio
└── README.md           # Questo file
```

## 🎮 Events Socket.io

### Client → Server

| Evento | Payload | Descrizione |
|--------|---------|-------------|
| `join-room` | `{ roomId, playerName }` | Giocatore entra in una stanza |
| `start-game` | `{}` | Inizia la partita (4 giocatori) |
| `draw-card` | `{}` | Estrai una carta dal mazzo |
| `substitute-card` | `{ cardPosition, newCard }` | Sostituisci una carta |
| `get-game-state` | `{}` | Richiedi lo stato completo |

### Server → Client

| Evento | Payload | Descrizione |
|--------|---------|-------------|
| `player-joined` | `{ playerName, role, totalPlayers, publicState }` | Nuovo giocatore entrato |
| `player-left` | `{ playerName, remainingPlayers, publicState }` | Giocatore uscito |
| `ready-to-start` | `{ message }` | 4 giocatori pronti |
| `game-started` | `{ message, currentRound, deckSize }` | Gioco iniziato |
| `card-drawn-by-player` | `{ playerName, playerRole, deckSize }` | Qualcuno ha estratto |
| `card-substituted-by-player` | `{ playerName, playerRole, position, discardPileSize }` | Qualcuno ha sostituito |

## 🔐 Sicurezza & Privacy

### Implementazione della Privacy delle Carte

Il server implementa la **privacy per design**:

1. **Carta estratta**: Solo il giocatore che l'ha estratta riceve il numero
2. **Mano degli altri**: Gli altri giocatori vedono solo quante carte ha ciascuno, non quali
3. **Validazione server**: Il server valida che i giocatori non richiedano info che non dovrebbero ricevere

### Funzione key: `getGameStateForPlayer(socketId)`

```javascript
// Invia TUTTO al giocatore corrente
myPlayer: {
  hand: [5, 12, 28, 35]  // Vede le sue carte
}

// Invia SOLO il numero di carte agli altri
otherPlayers: [
  { name: "Beta", handSize: 4 },  // NON le carte specifiche
  { name: "Lambda", handSize: 4 }
]
```

## 🐛 Debugging

### Abilita log dettagliati

Modifica `server.js` e aggiungi:

```javascript
io.engine.on('connection_error', (err) => {
  console.error('Connection error:', err);
});
```

### Verifica la connessione dal browser

Apri la console (F12) e digita:

```javascript
console.log(socket.connected);  // true/false
socket.emit('get-game-state', {}, (response) => {
  console.log('Game state:', response);
});
```

## 📊 API REST (opzionale)

Il server espone anche alcuni endpoint REST per info generali:

- `GET /api/health` - Verifica che il server sia attivo
- `GET /api/rooms` - Lista tutte le stanze di gioco pubbliche

## 🤝 Contributi

Se trovi bug o vuoi aggiungere funzionalità, apri un issue o una pull request!

## 📝 License

MIT License - Vedi LICENSE.md

## 📧 Supporto

Per problemi o domande:
1. Controlla la console del browser (F12)
2. Controlla i log del server su Render (Dashboard → Web Service → Logs)
3. Apri un issue su GitHub

---

**Buona fortuna con il tuo gioco multiplayer! 🎮🎴**
