import getRandomInt from '../common/get-random-int.js';
import startGame from '../engine.js';

const INTRO_QUESTION = 'What is the result of the expression?';
const MAX_NUMBER = 100;

const add = (left, right) => left + right;
const sub = (left, right) => left - right;
const multiply = (left, right) => left * right;

const Operations = {
  '+': add,
  '-': sub,
  '*': multiply,
};

const getCalcGameData = () => {
  const firstTerm = getRandomInt(1, MAX_NUMBER);
  const secondTerm = getRandomInt(1, MAX_NUMBER);

  const operators = Object.keys(Operations);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const operation = Operations[operator];
  const correctAnswer = String(operation(firstTerm, secondTerm));

  return {
    question: `${firstTerm} ${operator} ${secondTerm} = ?`,
    correctAnswer,
  };
};

export default () => startGame(getCalcGameData, INTRO_QUESTION);
