import getRandomInt from '../common/get-random-int.js';
import startGame from '../engine.js';

const INTRO_QUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MAX_NUMBER = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeGameData = () => {
  const randomNumber = getRandomInt(1, MAX_NUMBER);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => startGame(getPrimeGameData, INTRO_QUESTION);
