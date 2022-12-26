import readlineSync from 'readline-sync';
import { randomNum, question, isCorrect } from '../index.js';

const brainEven = (name) => {
  const randomNumber = randomNum();
  const answer = readlineSync.question(question(randomNumber));
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return isCorrect(answer, correctAnswer, name);
};

export default brainEven;
