import readlineSync from 'readline-sync';

const getRandomNum = (max = 5) => Math.ceil(((Math.random()) * max) + ((Math.random()) * max));

const showDescription = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return console.log('Answer "yes" if the number is even, otherwise answer "no".');
    case 'brain-calc':
      return console.log('What is the result of the expression?');
    case 'brain-gcd':
      return console.log('Find the greatest common divisor of given numbers.');
    case 'brain-progression':
      return console.log('What number is missing in the progression?');
    case 'brain-prime':
      return console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    default:
      return console.log('Error! Please check input data.');
  }
};
const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const showQuestion = (task) => `Question: ${task}\nYour answer: `;
const getUserAnswer = (task) => readlineSync.question(showQuestion(task));
const isCorrect = (userAnswer, correctAnswer) => (userAnswer === String(correctAnswer));

const startGame = (gameName, game, rounds = 3) => {
  const userName = getUserName();
  showDescription(gameName);

  for (let i = 1; i <= rounds; i += 1) {
    const [gameQuestion, correctAnswer] = game();
    const userAnswer = getUserAnswer(gameQuestion);
    if (!isCorrect(userAnswer, correctAnswer)) {
      return console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export { getRandomNum };
export default startGame;
