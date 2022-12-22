import readlineSync from 'readline-sync';
import { randomNum, question, isCorrect } from '../index.js';

const brainCalc = (name) => {
  const mathOperators = [' + ', ' - ', ' * '];
  const firstInteger = randomNum();
  const secondInteger = randomNum();
  const randomOperator = mathOperators[Math.floor(Math.random() * mathOperators.length)];

  let mathTask;
  let correctAnswer;

  switch (randomOperator) {
    case ' * ':
      mathTask = `${firstInteger} * ${secondInteger}`;
      correctAnswer = String(firstInteger * secondInteger);
      break;
    case ' + ':
      mathTask = `${firstInteger} + ${secondInteger}`;
      correctAnswer = String(firstInteger + secondInteger);
      break;
    case ' - ':
      mathTask = `${firstInteger} - ${secondInteger}`;
      correctAnswer = String(firstInteger - secondInteger);
      break;
    default:
      break;
  }
  const answer = readlineSync.question(question(mathTask));

  return isCorrect(answer, correctAnswer, name);
};

export default brainCalc;
