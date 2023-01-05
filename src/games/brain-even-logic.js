import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getGameData = () => {
  const task = getRandom(1, 10);
  const answer = isEven(task);

  return [task, answer];
};

const brainEven = () => startGame(gameDescription, getGameData);

export default brainEven;
