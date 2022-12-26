#!/usr/bin/env node

import gameRounds from '../src/index.js';
import brainProgression from '../src/games/brain-progression-logic.js';

// brain-progression - mini-game,
// the player must determine the missing number in the arithmetic progression.

gameRounds(brainProgression, 'brain-progression', 10);

// gameRounds() - main function,
// that starts the games (1st parameter),
// determines the task (2nd parameter)
// and the number of rounds (3rd parameter).
//
// default value of rounds = 3
// you can add your value as third parameter
// example: gameRounds(brainProgression, 'brain-progression', 10)
