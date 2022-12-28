#!/usr/bin/env node

import gameRounds from '../src/index.js';
import brainPrime from '../src/games/brain-prime-logic.js';

// brain-prime - mini-game,
// the player must determine if the number is prime or not

gameRounds(brainPrime, 'brain-prime');

// gameRounds() - main function,
// that starts the games (1st parameter),
// determines the task (2nd parameter)
// and the number of rounds (3rd parameter).
//
// default value of rounds = 3
// you can add your value as third parameter
// example: gameRounds(brainPrime, 'brain-prime', 10)
