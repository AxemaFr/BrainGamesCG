import getRandomInt from '../common/get-random-int.js';
import startGame from '../core.js';

const INTRO_QUESTION = 'What is the result of the expression?';
const MAX_NUMBERS_LENGTH = 3;
const MAX_NUMBER = 100;

const getCalcGameData = () => {
  const randomTerms = new Array(getRandomInt(1, MAX_NUMBERS_LENGTH))
    .fill('')
    .map(() => getRandomInt(1, MAX_NUMBER));

  const correctAnswer = String(randomTerms.reduce((acc, cur) => (acc + cur), 0));

  return {
    question: randomTerms.join(' + '),
    correctAnswer,
  };
};

export default () => startGame(getCalcGameData, INTRO_QUESTION);
