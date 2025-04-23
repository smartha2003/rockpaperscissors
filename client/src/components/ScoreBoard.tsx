import React from 'react';
import { Trophy, XCircle, Minus } from 'lucide-react';
import { useGameContext } from '../context/GameContext';

const ScoreBoard: React.FC = () => {
  const { score, resetScore } = useGameContext();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-lg font-semibold text-gray-700">Score</h2>
        <button 
          onClick={resetScore}
          className="text-xs px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-700"
        >
          Reset
        </button>
      </div>
      
      <div className="w-full grid grid-cols-3 gap-2 text-center">
        <div className="flex flex-col items-center bg-green-100 p-2 rounded-lg">
          <Trophy size={20} className="text-green-600 mb-1" />
          <span className="text-sm text-gray-700">Wins</span>
          <span className="text-xl font-bold text-green-700">{score.wins}</span>
        </div>
        
        <div className="flex flex-col items-center bg-red-100 p-2 rounded-lg">
          <XCircle size={20} className="text-red-600 mb-1" />
          <span className="text-sm text-gray-700">Losses</span>
          <span className="text-xl font-bold text-red-700">{score.losses}</span>
        </div>
        
        <div className="flex flex-col items-center bg-gray-100 p-2 rounded-lg">
          <Minus size={20} className="text-gray-600 mb-1" />
          <span className="text-sm text-gray-700">Draws</span>
          <span className="text-xl font-bold text-gray-700">{score.draws}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;