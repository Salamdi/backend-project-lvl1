import play from '../index.js';
import randomNumber from '../randomNumber.js';

const mult = (a, b) => a * b;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const ops = [
  { act: mult, sym: '*' },
  { act: add, sym: '+' },
  { act: sub, sym: '-' },
];

const calcGame = () => {
  const a = randomNumber(0, 100);
  const b = randomNumber(0, 100);
  const op = ops[randomNumber(0, ops.length - 1)];
  const question = `${a} ${op.sym} ${b}`;
  const answer = op.act(a, b).toString(10);
  return { question, answer };
};

calcGame.intro = 'What is the result of the expression?';

export default () => play(calcGame);
