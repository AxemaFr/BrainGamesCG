import getRandomInt from '../common/get-random-int.js';
import startGame from '../engine.js';

const INTRO_QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const getEvenGameData = () => {
  const randomNumber = getRandomInt(1, MAX_NUMBER);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => startGame(getEvenGameData, INTRO_QUESTION);
