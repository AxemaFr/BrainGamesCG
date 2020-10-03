import getRandomInt from '../common/get-random-int.js'


const getCalcGameData = () => {
  const randomTerms = new Array(getRandomInt(1, 3)).fill('').map(() => getRandomInt(1, 100));

  const correctAnswer = randomTerms.reduce((acc, cur) => acc + cur, 0);

  return {
    question: randomTerms.join(' + '),
    correctAnswer,
  };
};

export default getCalcGameData;
