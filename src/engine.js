import promptly from 'promptly';

const WIN_QUESTIONS_COUNT = 3;

async function startGame(genGameData, intro) {
  const userName = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(intro);

  for (let i = 0; i < WIN_QUESTIONS_COUNT; i += 1) {
    const { question, correctAnswer } = genGameData();
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
