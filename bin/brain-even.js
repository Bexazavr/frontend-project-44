#!/usr/bin/env node
import gameRounds from '../src/index.js';
import brainEven from '../src/games/brain-even-logic.js';

// brainEven - mini-game, the player guesses whether the number is even or not

gameRounds(brainEven);

// gameRounds() - main func that starts the minigames and determines the number of rounds.
// default value of rounds = 3
// you can add your value as second attribute
// example: gameRounds(brainEven, 10)
