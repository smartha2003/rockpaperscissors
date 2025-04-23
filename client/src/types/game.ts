// Move types
export type Move = 'rock' | 'paper' | 'scissors';
export type Result = 'win' | 'lose' | 'draw' | null;

// Game state
export interface GameState {
  playerMove: Move | null;
  computerMove: Move | null;
  result: Result;
}

// Score tracking
export interface Score {
  wins: number;
  losses: number;
  draws: number;
}

// Game actions
export type GameAction =
  | { type: 'MAKE_MOVE'; payload: Move; computerMove: Move; result: 'win' | 'lose' | 'draw' }
  | { type: 'RESET_GAME' };