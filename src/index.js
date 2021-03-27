import readlineSync from 'readline-sync';
import greeter from './cli.js';

const LAST_ROUND = 3;

export default (game, description) => {
  const name = greeter();
  console.log(description);
  let round = 0;
  do {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    round += 1;
    console.log('Correct!');
  } while (round < LAST_ROUND);
  console.log(`Congratulations, ${name}!`);
};
