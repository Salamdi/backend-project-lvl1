import readlineSync from 'readline-sync';
import greeter from './cli.js';

const MAX_COUNT = 3;

export default (game) => {
  const name = greeter();
  console.log(game.intro);
  let count = MAX_COUNT;
  do {
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      break;
    }
    count -= 1;
  } while (count);
  if (count) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
