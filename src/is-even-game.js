import readlineSync from 'readline-sync';
import greeter from './cli.js';

const MAX_COUNT = 3;
const MAX_NUM = 1000;

const isEvenGame = () => {
  const name = greeter();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = MAX_COUNT;
  let userAnswer;
  let isAnswerCorrect;
  do {
    const randNum = Math.floor(Math.random() * MAX_NUM);
    const correctAnswer = randNum % 2 ? 'no' : 'yes';
    console.log(`Question: ${randNum}`);
    userAnswer = readlineSync.question('Your answer: ');
    isAnswerCorrect = correctAnswer === userAnswer;
    count -= 1;
  } while (count && isAnswerCorrect);
  if (isAnswerCorrect) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${userAnswer === 'yes' ? 'no' : 'yes'}'.`,
    );
    console.log(`Let's try again, ${name}!`);
  }
};

export default isEvenGame;
