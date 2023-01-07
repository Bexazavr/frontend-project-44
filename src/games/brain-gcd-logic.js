import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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

const getGameData = () => {
  const firstNum = getRandom(1, 50);
  const secondNum = getRandom(1, 50);
  const task = `${firstNum} ${secondNum}`;
  const answer = `${getGcd(firstNum, secondNum)}`;

  return [task, answer];
};

const playBrainGcd = () => startGame(gameDescription, getGameData);

export default playBrainGcd;
