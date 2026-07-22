// Constants for Nineteen10 game

const PLAYERS = {
  ALPHA: 'alpha',
  BETA: 'beta',
  LAMBDA: 'lambda',
  DELTA: 'delta'
};

const PLAYER_ROLES = [PLAYERS.ALPHA, PLAYERS.BETA, PLAYERS.LAMBDA, PLAYERS.DELTA];

const GAME_STATUS = {
  WAITING: 'waiting',
  PLAYING: 'playing',
  FINISHED: 'finished'
};

const ACTIONS = {
  DRAW_CARD: 'draw_card',
  SUBSTITUTE_CARD: 'substitute_card',
  PLAYER_JOINED: 'player_joined',
  PLAYER_LEFT: 'player_left',
  GAME_STARTED: 'game_started',
  GAME_ENDED: 'game_ended',
  ROUND_UPDATED: 'round_updated'
};

// Deck: 40 carte, numerate 0-39 (da 1 a 40)
const DECK_SIZE = 40;

// Numero massimo di carte in mano per giocatore
const MAX_HAND_SIZE = 4;

module.exports = {
  PLAYERS,
  PLAYER_ROLES,
  GAME_STATUS,
  ACTIONS,
  DECK_SIZE,
  MAX_HAND_SIZE
};
