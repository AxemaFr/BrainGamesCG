import getRandomInt from '../common/get-random-int.js';
import startGame from "../core.js";

const INTRO_QUESTION = 'Find the greatest common divisor of given numbers.';

const findGcd = (first, second) => {
  if (second) {
    return findGcd(second, first % second);
  } else {
    return Math.abs(first);
  }
};

const getGcdGameData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = String(findGcd(firstNumber, secondNumber));

  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer,
  };
};

export default () => startGame(getGcdGameData, INTRO_QUESTION);
