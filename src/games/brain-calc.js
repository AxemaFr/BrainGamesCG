import promptly from 'promptly';
import getRandomInt from '../common/get-random-int.js'

const introQuestion = 'What is the result of the expression?';

const getCalcGameData = () => {
  const randomTerms = new Array(getRandomInt(1, 4)).fill('').map(() => getRandomInt(1, 100));

  const correctAnswer = randomTerms.reduce((acc, cur) => acc + cur, 0);

  return {
    intro: introQuestion,
    question: randomTerms.join(' + '),
    correctAnswer,
  };
};

export default getCalcGameData;
