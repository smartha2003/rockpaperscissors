import React from 'react';
import { useGameContext } from '../context/GameContext';
import { type Move } from '../types/game';

const PlayerChoices: React.FC = () => {
  const { makeMove } = useGameContext(); // 👈 this comes from the context

  const choices: { move: Move; emoji: string; label: string }[] = [
    { move: 'rock', emoji: '🪨', label: 'Rock' },
    { move: 'paper', emoji: '📄', label: 'Paper' },
    { move: 'scissors', emoji: '✂️', label: 'Scissors' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {choices.map(({ move, emoji, label }) => (
        <button
          key={move}
          onClick={() => makeMove(move)} // ✅ use context function here
          className="flex flex-col items-center justify-center py-4 bg-gray-100 rounded-lg hover:bg-purple-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label={label}
        >
          <span className="text-4xl mb-2">{emoji}</span>
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default PlayerChoices;
