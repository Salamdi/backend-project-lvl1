import play from '../index.js';
import randomNumber from '../randomNumber.js';

const DESCRIPTION = 'What number is missing in the progression?';

const makeProgression = (n) => {
  const diff = randomNumber(0, 10);
  const first = randomNumber(0, 20);
  const progression = [];
  for (let idx = 0; idx < n; idx += 1) {
    const element = first + (idx * diff);
    progression[idx] = element;
  }
  return progression;
};

const hideElement = (array, n) => {
  const result = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx === n) {
      result[idx] = '..';
    } else {
      result[idx] = array[idx];
    }
  }
  return result;
};

const progressionGame = () => {
  const progressionLength = randomNumber(5, 10);
  const progression = makeProgression(progressionLength);
  const hiddenIndex = randomNumber(0, progressionLength - 1);
  const questionArray = hideElement(progression, hiddenIndex);
  const question = questionArray.join(' ');
  const answer = progression[hiddenIndex].toString(10);

  return [question, answer];
};

export default () => play(progressionGame, DESCRIPTION);
