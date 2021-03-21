import play from '../index.js';
import randomNumber from '../randomNumber.js';

const makeProgression = (n) => {
  const d = randomNumber(0, 10);
  const init = randomNumber(0, 20);
  return (new Array(n)).fill(0)
    .map((_, i) => init + i * d)
    .map((x) => x.toString(10));
};

const progressionGame = () => {
  const progressionLength = randomNumber(5, 10);
  const progression = makeProgression(progressionLength);
  const hiddenIndex = randomNumber(0, progressionLength);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

progressionGame.intro = 'What number is missing in the progression?';

export default () => play(progressionGame);
