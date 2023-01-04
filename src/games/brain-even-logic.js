import startGame, { getRandomNum } from '../index.js';

const gameName = 'brain-even';

const isEven = (num) => num % 2 === 0;
const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const game = () => {
  const task = getRandomNum();
  const answer = getCorrectAnswer(task);

  return [task, answer];
};

const brainEven = () => startGame(gameName, game);

export default brainEven;
