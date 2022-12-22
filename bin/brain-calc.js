#!/usr/bin/env node
import gameRounds from '../src/index.js';
import brainCalc from '../src/games/brain-calc-logic.js';

// brain-calc - mini-game, the player solves simple math tasks

gameRounds(brainCalc);

// gameRounds() - main func that starts the minigames and determines the number of rounds.
// default value of rounds = 3
// you can add your value as second attribute
// example: gameRounds(brainCalc, 10)
