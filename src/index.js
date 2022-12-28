import readlineSync from 'readline-sync';

// function to generate a random number
const randomNum = (max = 5) => Math.ceil(((Math.random()) * max) + ((Math.random()) * max));

// arithmetic progression generation function
const generateProgression = (numQty = 10) => {
  const startNum = Math.ceil((Math.random()) * 10);
  const step = Math.ceil((Math.random()) * 10);
  const result = [startNum];
  for (let i = 1; i < numQty; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

// the function of calculating the greatest common divisor
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
// function to determine if a number is prime

const isPrime = (num) => {
  if (num === 1 || num === 2) { return 'yes'; }
  let i = 2;
  while (i < num) {
    if (num > i && num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

// function for posing a question and substituting in "readlineSync"
const question = (task) => `Question: ${task}\nYour answer: `;

// function to respond in case of a player error
const wrongAnswer = (playerAnswer, correctAnswer, playerName) => `'${playerAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;

// function to check the player's answer with the correct answer
const isCorrect = (playerAnswer, correctAnswer, playerName) => {
  if (playerAnswer === correctAnswer) {
    return true;
  }
  return console.log(wrongAnswer(playerAnswer, correctAnswer, playerName));
};

// welcome func, which discovers the player's name and return it
const welcome = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let task;
  switch (game) {
    case 'brain-even':
      task = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'brain-calc':
      task = 'What is the result of the expression?';
      break;
    case 'brain-gcd':
      task = 'Find the greatest common divisor of given numbers.';
      break;
    case 'brain-progression':
      task = 'What number is missing in the progression?';
      break;
    case 'brain-prime':
      task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;
    default:
      break;
  }
  console.log(task);
  return name;
};

const gameRounds = (game, gameName, rounds = 3) => {
  const name = welcome(gameName);
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
  randomNum, generateProgression, getGcd, isPrime, question, isCorrect,
};
export default gameRounds;
