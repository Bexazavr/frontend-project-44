import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const rounds = 3;

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const task = getRandom(1, 10);
  const answer = isEven(task) ? 'yes' : 'no';

  return [task, answer];
};

const playBrainEven = () => startGame(gameDescription, getGameData, rounds);

export default playBrainEven;
