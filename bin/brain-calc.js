#!/usr/bin/env node
import getCalcGameData from '../src/games/brain-calc.js';
import startGame from '../src/index.js';

const introQuestion = 'What is the result of the expression?';
startGame(getCalcGameData, introQuestion);
