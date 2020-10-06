import getRandomInt from '../common/get-random-int.js';
import startGame from '../engine.js';

const INTRO_QUESTION = 'What number is missing in the progression?';
const MAX_START_NUMBER = 15;
const MAX_STEP = 5;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;

const generateProgression = (startNumber, step, length) => (
  new Array(length).fill(null).map((current, index) => startNumber + index * step)
);

const getProgressionGameData = () => {
  const startNumber = getRandomInt(1, MAX_START_NUMBER);
  const step = getRandomInt(1, MAX_STEP);
  const progressionLength = getRandomInt(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);

  const progression = generateProgression(startNumber, step, progressionLength);
  const progressionIndexToRemove = getRandomInt(0, progression.length - 1);

  const progressionWithMissingElement = progression
    .map((elem, idx) => (idx === progressionIndexToRemove ? '...' : elem))
    .join('->');

  const correctAnswer = String(progression[progressionIndexToRemove]);

  return {
    question: progressionWithMissingElement,
    correctAnswer,
  };
};

export default () => (startGame(getProgressionGameData, INTRO_QUESTION));
