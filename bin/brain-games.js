#!/usr/bin/env node
import askName from '../src/cli.js';

function initGame() {
  console.log('Welcome to the Brain Games!');
  askName();
}

initGame();
