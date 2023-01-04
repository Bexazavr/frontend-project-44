import startGame, { getRandomNum } from '../index.js';

const gameName = 'brain-gcd';

const getGcd = (numOne, numTwo) => {
  const minNum = Math.min(numOne, numTwo);
  const maxNum = Math.max(numOne, numTwo);
  let gcd;
  for (let i = minNum; i > 0; i -= 1) {
    if (maxNum % i === 0 && minNum % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const game = () => {
  const firstNum = getRandomNum(25);
  const secondNum = getRandomNum(25);
  const task = `${firstNum} ${secondNum}`;
  const answer = `${getGcd(firstNum, secondNum)}`;
  return [task, answer];
};

const brainGcd = () => startGame(gameName, game);

export default brainGcd;
