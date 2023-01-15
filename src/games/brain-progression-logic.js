import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const rounds = 3;

const getProgression = (startNum, step, numQty) => {
  const result = [startNum];
  for (let i = 1; i < numQty; i += 1) {
    result.push(result[i - 1] + step);
  }

  return result;
};

const getGameData = () => {
  const progressionStartNum = getRandom(0, 15);
  const progressionStep = getRandom(1, 10);
  const progressionLength = 10;
  const progression = getProgression(progressionStartNum, progressionStep, progressionLength);
  const hiddenIndex = getRandom(0, progressionLength - 1);
  const answer = `${progression[hiddenIndex]}`;
  progression[hiddenIndex] = '..';
  const task = progression.join(' ');

  return [task, answer];
};

const playBrainProgression = () => startGame(gameDescription, getGameData, rounds);

export default playBrainProgression;
