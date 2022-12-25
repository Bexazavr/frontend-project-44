import readlineSync from 'readline-sync';
import {
  randomNum, getGcd, question, isCorrect,
} from '../index.js';

const brainGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  const firstInteger = randomNum(25);
  const secondInteger = randomNum(25);
  const brainTask = `${firstInteger} ${secondInteger}`;
  const correctAnswer = `${getGcd(firstInteger, secondInteger)}`;
  const answer = readlineSync.question(question(brainTask));

  return isCorrect(answer, correctAnswer, name);
};

export default brainGcd;
