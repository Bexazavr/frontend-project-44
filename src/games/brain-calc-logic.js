import startGame, { getRandomNum } from '../index.js';

const gameName = 'brain-calc';

const getRandomOperator = (operators) => operators[Math.floor(Math.random() * operators.length)];
const calculateResult = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '*':
      return firstNum * secondNum;
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return 'Error! Please check input data.';
  }
};

const operators = ['*', '+', '-'];

const game = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const operator = getRandomOperator(operators);
  const task = `${firstNum} ${operator} ${secondNum}`;
  const answer = calculateResult(firstNum, operator, secondNum);

  return [task, answer];
};

const brainCalc = () => startGame(gameName, game);

export default brainCalc;
