import helper from '../helper.js';

const mult = (a, b) => a * b;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const ops = [
  { act: mult, sym: '*' },
  { act: add, sym: '+' },
  { act: sub, sym: '-' },
];

const calcGame = () => {
  const a = helper.randomNumber(100);
  const b = helper.randomNumber(100);
  const op = ops[helper.randomNumber(ops.length)];
  const question = `${a} ${op.sym} ${b}`;
  const answer = op.act(a, b).toString(10);
  return { question, answer };
};

calcGame.intro = 'What is the result of the expression?';

export default calcGame;
