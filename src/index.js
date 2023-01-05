import readlineSync from 'readline-sync';

const startGame = (gameDescription, gameData, rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 1; i <= rounds; i += 1) {
    const [gameQuestion, correctAnswer] = gameData();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      return console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
