import getRandomInt from '../common/get-random-int.js';
import startGame from "../core.js";

const INTRO_QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getEvenGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => startGame(getEvenGameData, INTRO_QUESTION);
