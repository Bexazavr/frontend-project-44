import getRandom from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (numQty = 10) => {
  const startNum = getRandom(0, 15);
  const step = getRandom(1, 10);
  const result = [startNum];
  for (let i = 1; i < numQty; i += 1) {
    result.push(result[i - 1] + step);
  }

  return [result, numQty];
};

const getGameData = () => {
  const [progression, progressionLength] = getProgression();
  const hiddenIndex = getRandom(0, progressionLength - 1);
  const answer = `${progression[hiddenIndex]}`;
  progression[hiddenIndex] = '..';
  const task = progression.join(' ');

  return [task, answer];
};

const brainProgression = () => startGame(gameDescription, getGameData);

export default brainProgression;
