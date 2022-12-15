#!/usr/bin/env node
import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let correctCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = Math.round((Math.random() * 10) + 1);
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

    if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0)) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    if (correctCount === 3) { console.log(`Congratulations, ${name}!`); }
  }
};

game();
