import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getGameData = () => {
  const task = getRandom(1, 50);
  const answer = isPrime(task);

  return [task, answer];
};

const brainPrime = () => startGame(gameDescription, getGameData);

export default brainPrime;
