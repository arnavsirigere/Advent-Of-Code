const { bingo } = require('./Part 1');
const { sumOfArray } = require('../../utils/functions.js');

function solve(input) {
  const drawnNumbers = input.shift().split(',').map(Number);
  const boards = input.map((board) => board.split('\n').map((row) => row.split(/\s+/).filter(Boolean)));
  let drawnIndex = 0;
  while (true) {
    for (let b = boards.length - 1; b >= 0; b--) {
      const board = boards[b];
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (board[i][j] == drawnNumbers[drawnIndex]) {
            board[i][j] = 'x';
          }
        }
      }
      if (bingo(board)) {
        if (boards.length == 1) {
          return drawnNumbers[drawnIndex] * boards.pop().reduce((unmarkedSum, row) => (unmarkedSum += sumOfArray(row.filter((val) => val != 'x').map(Number))), 0);
        }
        boards.splice(b, 1);
      }
    }
    drawnIndex++;
  }
}

module.exports = { solve };
