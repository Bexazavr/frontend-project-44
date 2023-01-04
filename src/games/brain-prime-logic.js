import startGame, { getRandomNum } from '../index.js';

const gameName = 'brain-prime';

const isPrime = (num) => {
  if (num === 1 || num === 2) { return 'yes'; }
  let i = 2;
  while (i < num) {
    if (num > i && num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const game = () => {
  const task = getRandomNum();
  const answer = isPrime(task);

  return [task, answer];
};

const brainPrime = () => startGame(gameName, game);

export default brainPrime;
