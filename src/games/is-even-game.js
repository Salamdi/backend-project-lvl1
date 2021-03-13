import helper from '../helper.js';

const isEven = () => {
  const question = helper.randomNumber();
  const answer = question % 2 ? 'no' : 'yes';

  return { question, answer };
};

isEven.intro = 'Answer "yes" if the number is even, otherwise answer "no".';

export default isEven;
