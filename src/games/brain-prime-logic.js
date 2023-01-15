import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rounds = 3;

const isPrime = (num) => {
  if (num === 1 || num === 2) { return true; }
  let i = 2;
  while (i < num) {
    if (num > i && num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getGameData = () => {
  const task = getRandom(1, 50);
  const answer = isPrime(task) ? 'yes' : 'no';

  return [task, answer];
};

const playBrainPrime = () => startGame(gameDescription, getGameData, rounds);

export default playBrainPrime;
