import readlineSync from 'readline-sync';

const randomNum = (max = 15) => Math.ceil(((Math.random()) * max) + ((Math.random()) * max));
const getGcd = (numOne, numTwo) => {
  const minNum = Math.min(numOne, numTwo);
  const maxNum = Math.max(numOne, numTwo);
  let gcd;
  for (let i = minNum; i > 0; i -= 1) {
    if (maxNum % i === 0 && minNum % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};
const question = (task) => `Question: ${task}\nYour answer: `;
const wrongAnswer = (playerAnswer, correctAnswer, playerName) => `'${playerAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;

const isCorrect = (playerAnswer, correctAnswer, playerName) => {
  if (playerAnswer === correctAnswer) {
    return true;
  }
  return console.log(wrongAnswer(playerAnswer, correctAnswer, playerName));
};

/*      welcome func, which discovers the player's name and return it     */
const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const gameRounds = (game, rounds = 3) => {
  const name = welcome();
  let correctAnswersCount = 0;
  for (let i = 0; i < rounds; i += 1) {
    if (!game(name)) {
      return;
    }
    correctAnswersCount += 1;
    console.log('Correct!');
  }
  if (correctAnswersCount === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  randomNum, getGcd, question, isCorrect,
};
export default gameRounds;
