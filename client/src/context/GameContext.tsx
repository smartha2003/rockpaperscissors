import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getResult, getRandomMove } from '../utils/gameLogic';
import { GameState, Score, Move, GameAction } from '../types/game';

// Initial state
const initialGameState: GameState = {
  playerMove: null,
  computerMove: null,
  result: null,
};

const initialScore: Score = {
  wins: 0,
  losses: 0,
  draws: 0,
};

// Load score from localStorage if available
const loadScore = (): Score => {
  const savedScore = localStorage.getItem('rpsScore');
  return savedScore ? JSON.parse(savedScore) : initialScore;
};

// Game reducer
const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'MAKE_MOVE':
      return {
        ...state,
        playerMove: action.payload,
        computerMove: action.computerMove,
        result: action.result,
      };
    case 'RESET_GAME':
      return initialGameState;
    default:
      return state;
  }
};

// Score reducer
const scoreReducer = (state: Score, action: { type: string; payload?: any }): Score => {
  switch (action.type) {
    case 'INCREMENT_WIN':
      return { ...state, wins: state.wins + 1 };
    case 'INCREMENT_LOSS':
      return { ...state, losses: state.losses + 1 };
    case 'INCREMENT_DRAW':
      return { ...state, draws: state.draws + 1 };
    case 'RESET_SCORE':
      return initialScore;
    default:
      return state;
  }
};

// Create context
type GameContextType = {
  gameState: GameState;
  score: Score;
  makeMove: (move: Move) => void;
  resetGame: () => void;
  resetScore: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

// Provider component
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, dispatchGameState] = useReducer(gameReducer, initialGameState);
  const [score, dispatchScore] = useReducer(scoreReducer, loadScore());

  // Save score to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('rpsScore', JSON.stringify(score));
  }, [score]);

  // Update score when result changes
  useEffect(() => {
    if (gameState.result === 'win') {
      dispatchScore({ type: 'INCREMENT_WIN' });
    } else if (gameState.result === 'lose') {
      dispatchScore({ type: 'INCREMENT_LOSS' });
    } else if (gameState.result === 'draw') {
      dispatchScore({ type: 'INCREMENT_DRAW' });
    }
  }, [gameState.result]);

  const makeMove = async (move: Move) => {
    try {
      const response = await fetch("rockpaperscissors-production-8880.up.railway.app/api/play", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMove: move }),
      });
  
      const data = await response.json();
      const { computerMove, result } = data;
  
      dispatchGameState({
        type: 'MAKE_MOVE',
        payload: move,
        computerMove,
        result,
      });
    } catch (err) {
      console.error("Error making move:", err);
    }
  };

  const resetGame = () => {
    dispatchGameState({ type: 'RESET_GAME' });
  };

  const resetScore = () => {
    dispatchScore({ type: 'RESET_SCORE' });
  };

  return (
    <GameContext.Provider value={{ gameState, score, makeMove, resetGame, resetScore }}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the game context
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};