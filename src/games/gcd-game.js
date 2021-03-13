import helper from '../helper.js';

const gcd = (a, b) => {
  let max = a > b ? a : b;
  let min = a > b ? b : a;

  while (max % min) {
    [max, min] = [min, max % min];
  }

  return min;
};

const gcdGame = () => {
  const a = helper.randomNumber(200);
  const b = helper.randomNumber(200);
  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString(10);

  return { question, answer };
};

gcdGame.intro = 'Find the greatest common divisor of given numbers.';

export default gcdGame;
