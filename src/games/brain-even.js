import getRandomInt from '../common/get-random-int.js';

const isEven = (number) => number % 2 === 0;

const getEvenGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default getEvenGameData;
