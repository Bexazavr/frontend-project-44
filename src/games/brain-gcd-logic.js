import readlineSync from 'readline-sync';
import {
  randomNum, getGcd, question, isCorrect,
} from '../index.js';

const brainGcd = (name) => {
  const firstInteger = randomNum(25);
  const secondInteger = randomNum(25);
  const brainTask = `${firstInteger} ${secondInteger}`;
  const correctAnswer = `${getGcd(firstInteger, secondInteger)}`;
  const answer = readlineSync.question(question(brainTask));

  return isCorrect(answer, correctAnswer, name);
};

export default brainGcd;
