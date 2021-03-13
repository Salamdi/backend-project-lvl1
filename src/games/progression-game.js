import helper from '../helper.js';

const makeProgression = (n) => {
  const d = helper.randomNumber(10);
  const init = helper.randomNumber(20);
  return (new Array(n)).fill(0)
    .map((_, i) => init + i * d)
    .map((x) => x.toString(10));
};

const progressionGame = () => {
  const progressionLength = helper.randomNumber(11, 5);
  const progression = makeProgression(progressionLength);
  const hiddenIndex = helper.randomNumber(progressionLength);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

progressionGame.intro = 'What number is missing in the progression?';

export default progressionGame;
