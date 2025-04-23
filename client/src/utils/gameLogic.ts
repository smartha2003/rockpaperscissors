import { Move, Result } from '../types/game';

// Get a random move for the computer
export const getRandomMove = (): Move => {
  const moves: Move[] = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

// Determine the result of a game
export const getResult = (playerMove: Move, computerMove: Move): Result => {
  if (playerMove === computerMove) {
    return 'draw';
  }
  
  if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'win';
  }
  
  return 'lose';
};