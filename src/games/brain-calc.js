import promptly from 'promptly';
import getRandomInt from '../common/get-random-int.js'

const introQuestion = 'What is the result of the expression?';

const getCalcGameData = () => {
  const randomTerms = new Array(getRandomInt(1, 4)).fill('').map(() => getRandomInt(1, 100));

  const correctAnswer = randomTerms.reduce((acc, cur) => acc + cur, 0);

  return {
    question: randomTerms.join(' + '),
    correctAnswer,
  };
};

async function start(userName) {
  const { question, correctAnswer } = getCalcGameData();

  console.log(introQuestion);
  console.log(`Question: ${question}`);
  const userAnswer = await promptly.prompt('Your answer: ');

  if (String(userAnswer) === String(correctAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export default start;
