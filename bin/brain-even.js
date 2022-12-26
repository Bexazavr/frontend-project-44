#!/usr/bin/env node

import gameRounds from '../src/index.js';
import brainEven from '../src/games/brain-even-logic.js';

// brainEven - mini-game, the player guesses whether the number is even or not

gameRounds(brainEven, 'brain-even');

// gameRounds() - main function,
// that starts the games (1st attribtute),
// determines the task (2nd attribute)
// and the number of rounds (3rd attribute).
//
// default value of rounds = 3
// you can add your value as third attribute
// example: gameRounds(brainEven, 'brain-even', 10)
