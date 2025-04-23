import React from 'react';
import { useGameContext } from '../context/GameContext';

const GameResult: React.FC = () => {
  const { gameState } = useGameContext();
  const { playerMove, computerMove, result } = gameState;

  // Define result styles
  const resultStyles = {
    win: 'text-green-600 font-bold',
    lose: 'text-red-600 font-bold',
    draw: 'text-gray-600 font-bold',
  };

  // Define result messages
  const resultMessages = {
    win: 'You Win!',
    lose: 'You Lose!',
    draw: "It's a Draw!",
  };

  // Get emoji for moves
  const getEmoji = (move: string | null) => {
    switch (move) {
      case 'rock': return '🪨';
      case 'paper': return '📄';
      case 'scissors': return '✂️';
      default: return '❓';
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-center items-center gap-8 w-full">
        <div className="flex flex-col items-center">
          <span className="text-5xl mb-2">{getEmoji(playerMove)}</span>
          <span className="text-sm font-medium">You</span>
        </div>
        
        <div className="text-2xl font-bold text-gray-700">vs</div>
        
        <div className="flex flex-col items-center">
          <span className="text-5xl mb-2">{getEmoji(computerMove)}</span>
          <span className="text-sm font-medium">Computer</span>
        </div>
      </div>
      
      <div className={`text-xl ${result ? resultStyles[result] : ''}`}>
        {result ? resultMessages[result] : ''}
      </div>
    </div>
  );
};

export default GameResult;