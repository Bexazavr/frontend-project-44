import readlineSync from 'readline-sync';
import {
  generateProgression, question, isCorrect,
} from '../index.js';

const brainProgression = (name) => {
  const progression = generateProgression();
  const randomNum = Math.floor((Math.random()) * progression.length);
  const correctAnswer = `${progression[randomNum]}`;
  progression[randomNum] = '..';
  const answer = readlineSync.question(question(progression.join(' ')));
  return isCorrect(answer, correctAnswer, name);
};

export default brainProgression;
