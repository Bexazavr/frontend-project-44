import readlineSync from 'readline-sync';
import {
  randomNum, isPrime, question, isCorrect,
} from '../index.js';

const brainPrime = (name) => {
  const num = randomNum(10);
  const correctAnswer = isPrime(num);
  const answer = readlineSync.question(question(num));
  return isCorrect(answer, correctAnswer, name);
};

export default brainPrime;
