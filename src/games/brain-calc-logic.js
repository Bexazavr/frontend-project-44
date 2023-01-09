import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculateResult = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '*':
      return firstNum * secondNum;
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      throw new Error('Parameter is not a operator!');
  }
};

const operators = ['*', '+', '-'];

const getGameData = () => {
  const firstNum = getRandom(1, 20);
  const secondNum = getRandom(1, 20);
  const operator = operators[getRandom(0, (operators.length - 1))];
  const task = `${firstNum} ${operator} ${secondNum}`;
  const answer = calculateResult(firstNum, operator, secondNum);

  return [task, answer];
};

const playBrainCalc = () => startGame(gameDescription, getGameData);

export default playBrainCalc;
