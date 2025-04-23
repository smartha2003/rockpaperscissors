import React from 'react';
import GameBoard from './src/components/GameBoard';
import { GameProvider } from './src/context/GameContext';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center p-4">
      <GameProvider>
        <main className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
          <h1 className="text-2xl md:text-3xl font-bold text-center py-4 bg-blue-500 text-white">
            Rock Paper Scissors
          </h1>
          <GameBoard />
        </main>
      </GameProvider>
    </div>
  );
}

export default App;