#!/usr/bin/env node

import gameRounds from '../src/index.js';
import brainCalc from '../src/games/brain-calc-logic.js';

// brain-calc - mini-game, the player solves simple math tasks

gameRounds(brainCalc, 'brain-calc');

// gameRounds() - main function,
// that starts the games (1st attribtute),
// determines the task (2nd attribute)
// and the number of rounds (3rd attribute).
//
// default value of rounds = 3
// you can add your value as third attribute
// example: gameRounds(brainCalc, 'brain-calc', 10)
