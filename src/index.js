import readlineSync from 'readline-sync';
import greeter from './cli.js';

const LAST_ROUND = 3;

export default (game) => {
  const name = greeter();
  console.log(game.intro);
  let round = 0;
  do {
    round += 1;
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      break;
    }

    console.log('Correct!');
  } while (round < LAST_ROUND);
  if (round < LAST_ROUND) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
