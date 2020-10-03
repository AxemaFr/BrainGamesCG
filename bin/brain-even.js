#!/usr/bin/env node
import startGame from '../src/index.js';
import getEvenGameData from "../src/games/brain-even.js";

startGame(getEvenGameData);
