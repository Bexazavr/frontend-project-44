import readlineSync from 'readline-sync';

const randomNum = (max = 10) => Math.floor((Math.random() * max) + (Math.random() * max));
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

export { randomNum, question, isCorrect };
export default gameRounds;
