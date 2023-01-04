import startGame from '../index.js';

const gameName = 'brain-progression';

const getProgression = (numQty = 10) => {
  const startNum = Math.ceil((Math.random()) * 10);
  const step = Math.ceil((Math.random()) * 10);
  const result = [startNum];
  for (let i = 1; i < numQty; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const game = () => {
  const progression = getProgression();
  const randomNum = Math.floor((Math.random()) * progression.length);
  const answer = `${progression[randomNum]}`;
  progression[randomNum] = '..';
  const task = progression.join(' ');

  return [task, answer];
};

const brainProgression = () => startGame(gameName, game);

export default brainProgression;
