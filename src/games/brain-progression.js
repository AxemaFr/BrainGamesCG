import getRandomInt from '../common/get-random-int.js';
import startGame from '../core.js';

const INTRO_QUESTION = 'What number is missing in the progression?';

const generateProgression = (startNumber, multiplier, length) => {
  return new Array(length).fill('').map( (current, index) => startNumber + index * multiplier);
};


const getProgressionGameData = () => {
  const startNumber = getRandomInt(1, 10);
  const multiplier = getRandomInt(1, 4);
  const progressionLength = 10;
  const progression = generateProgression(startNumber, multiplier, progressionLength);
  const progressionIndexToRemove = getRandomInt(0, progression.length - 1);
  const progressionWithMissingElement = progression
    .map((elem, idx) => idx === progressionIndexToRemove ? '...' : elem)
    .join('->');

  const correctAnswer = String(progression[progressionIndexToRemove]);

  return {
    question: progressionWithMissingElement,
    correctAnswer,
  };
};

export default () => startGame(getProgressionGameData, INTRO_QUESTION);
