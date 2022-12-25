import readlineSync from 'readline-sync';
import { randomNum, question, isCorrect } from '../index.js';

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = randomNum();
  const answer = readlineSync.question(question(randomNumber));
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return isCorrect(answer, correctAnswer, name);
};

export default brainEven;
