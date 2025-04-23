import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/play', (req, res) => {
  const { userMove } = req.body;
  const moves = ['rock', 'paper', 'scissors'];
  const computerMove = moves[Math.floor(Math.random() * 3)];

  let result: 'win' | 'lose' | 'draw' = 'draw';
  if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ) result = 'win';
  else if (userMove !== computerMove) result = 'lose';

  res.json({ computerMove, result });
});

app.get('/', (req, res) => {
  res.send('🎮 Rock Paper Scissors API is running!');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server running on http://localhost:3001');
});
