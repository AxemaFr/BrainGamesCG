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

async function start(userName) {
  const { question, correctAnswer } = getEvenGameData();

  console.log(introQuestion);
  console.log(`Question: ${question}`);
  const userAnswer = await promptly.prompt('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export default start;
