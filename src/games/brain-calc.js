import getRandomInt from '../common/get-random-int.js'
import startGame from "../index.js";

const introQuestion = 'What is the result of the expression?';

const getCalcGameData = () => {
  const randomTerms = new Array(getRandomInt(1, 3)).fill('').map(() => getRandomInt(1, 100));

  const correctAnswer = String(randomTerms.reduce((acc, cur) => acc + cur, 0));

  return {
    question: randomTerms.join(' + '),
    correctAnswer: correctAnswer,
  };
};

export default () => startGame(getCalcGameData, introQuestion);
