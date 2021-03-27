import play from '../index.js';
import randomNumber from '../randomNumber.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  const maxTrial = Math.sqrt(n);
  for (let i = 2; i <= maxTrial; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrimeGame = () => {
  const question = randomNumber(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => play(isPrimeGame, DESCRIPTION);
