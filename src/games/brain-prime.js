import getRandomInt from '../common/get-random-int.js';
import startGame from '../core.js';

const INTRO_QUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const getPrimeGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => startGame(getPrimeGameData, INTRO_QUESTION);
