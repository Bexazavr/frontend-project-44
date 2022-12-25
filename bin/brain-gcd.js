#!/usr/bin/env node
import gameRounds from '../src/index.js';
import brainGcd from '../src/games/brain-gcd-logic.js';

// brain-псв - mini-game,
// the player must calculate and enter the greatest common divisor of the two suggested numbers.

gameRounds(brainGcd);

// gameRounds() - main func that starts the minigames and determines the number of rounds.
// default value of rounds = 3
// you can add your value as second attribute
// example: gameRounds(brainCalc, 10)
