import getRandomInt from '../common/get-random-int.js';
import promptly from 'promptly';

const isEven = (number) => number % 2 === 0;

const introQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default getEvenGameData;
