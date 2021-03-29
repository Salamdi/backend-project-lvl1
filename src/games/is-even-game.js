import play from '../index.js';
import randomNumber from '../randomNumber.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => (n % 2) === 0;

const isEvenGame = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => play(isEvenGame, DESCRIPTION);
