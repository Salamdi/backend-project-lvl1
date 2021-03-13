import helper from '../helper.js';

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
  const question = helper.randomNumber(1000, 1);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

isPrimeGame.intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default isPrimeGame;
