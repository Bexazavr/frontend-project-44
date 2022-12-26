#!/usr/bin/env node

import gameRounds from '../src/index.js';
import brainGcd from '../src/games/brain-gcd-logic.js';

// brain-gcd - mini-game,
// the player must calculate and enter the greatest common divisor of the two suggested numbers.

gameRounds(brainGcd, 'brain-gcd');

// gameRounds() - main function,
// that starts the games (1st attribtute),
// determines the task (2nd attribute)
// and the number of rounds (3rd attribute).
//
// default value of rounds = 3
// you can add your value as third attribute
// example: gameRounds(brainGcd, 'brain-gcd', 10)
