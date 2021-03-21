import play from '../index.js';
import randomNumber from '../randomNumber.js';

const gcd = (a, b) => {
  let max = a > b ? a : b;
  let min = a > b ? b : a;

  while (max % min) {
    [max, min] = [min, max % min];
  }

  return min;
};

const gcdGame = () => {
  const a = randomNumber(0, 200);
  const b = randomNumber(0, 200);
  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString(10);

  return { question, answer };
};

gcdGame.intro = 'Find the greatest common divisor of given numbers.';

export default () => play(gcdGame);
