#!/usr/bin/env node
import startGame from '../src/index.js';
import getEvenGameData from "../src/games/brain-even.js";

const introQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

startGame(getEvenGameData, introQuestion);
