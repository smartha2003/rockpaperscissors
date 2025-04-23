import React, { useEffect } from 'react';
import PlayerChoices from './PlayerChoices';
import GameResult from './GameResult';
import ScoreBoard from './ScoreBoard';
import { useGameContext } from '../context/GameContext';

const GameBoard: React.FC = () => {
  const { gameState, resetGame } = useGameContext();
  
  // Auto-reset the game 2 seconds after a result is shown
  useEffect(() => {
    let timer: number;
    if (gameState.result) {
      timer = window.setTimeout(() => {
        resetGame();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [gameState.result, resetGame]);
  
  return (
    <div className="p-6 flex flex-col gap-6">
      <ScoreBoard />
      
      {!gameState.result ? (
        <>
          <p className="text-center text-gray-700 font-medium">Make your move:</p>
          <PlayerChoices />
        </>
      ) : (
        <GameResult />
      )}
    </div>
  );
};

export default GameBoard;