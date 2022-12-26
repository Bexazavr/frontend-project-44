#!/usr/bin/env node

import gameRounds from '../src/index.js';
import brainEven from '../src/games/brain-even-logic.js';

// brainEven - mini-game, the player guesses whether the number is even or not

gameRounds(brainEven, 'brain-even');

// gameRounds() - main function,
// that starts the games (1st parameter),
// determines the task (2nd parameter)
// and the number of rounds (3rd parameter).
//
// default value of rounds = 3
// you can add your value as third parameter
// example: gameRounds(brainEven, 'brain-even', 10)
