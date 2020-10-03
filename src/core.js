import promptly from 'promptly';

async function askName() {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}

async function startGame(gameDataFn, intro) {
  const userName = await askName();

  console.log(intro);

  const winQuestionsCount = 3;

  for (let i = 0; i < winQuestionsCount; i += 1) {
    const { question, correctAnswer } = gameDataFn();
    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log('You won man!');
}

export default startGame;