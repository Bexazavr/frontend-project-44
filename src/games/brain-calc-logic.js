import readlineSync from 'readline-sync';
import { randomNum, question, isCorrect } from '../index.js';

const brainCalc = (name) => {
  console.log('What is the result of the expression?');
  const mathOperators = ['+', '-', '*'];
  const firstInteger = randomNum();
  const secondInteger = randomNum();
  const randomOperator = mathOperators[Math.floor(Math.random() * mathOperators.length)];

  let brainTask;
  let correctAnswer;

  switch (randomOperator) {
    case '*':
      brainTask = `${firstInteger} * ${secondInteger}`;
      correctAnswer = String(firstInteger * secondInteger);
      break;
    case '+':
      brainTask = `${firstInteger} + ${secondInteger}`;
      correctAnswer = String(firstInteger + secondInteger);
      break;
    case '-':
      brainTask = `${firstInteger} - ${secondInteger}`;
      correctAnswer = String(firstInteger - secondInteger);
      break;
    default:
      break;
  }
  const answer = readlineSync.question(question(brainTask));

  return isCorrect(answer, correctAnswer, name);
};

export default brainCalc;
