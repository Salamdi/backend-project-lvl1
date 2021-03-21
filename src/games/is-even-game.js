import play from '../index.js';
import randomNumber from '../randomNumber.js';

const isEven = () => {
  const question = randomNumber();
  const answer = question % 2 ? 'no' : 'yes';

  return { question, answer };
};

isEven.intro = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => play(isEven);
