const { sumOfArray } = require('../../utils/functions.js');

function solve(input) {
  const drawnNumbers = input[0].split(',').map(Number);
  const boards = input.slice(1, input.length).map((board) => board.split('\n').map((row) => row.split(/\s+/).filter(Boolean)));
  for (let n = 0; n < drawnNumbers.length; n++) {
    for (const board of boards) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (board[i][j] == drawnNumbers[n]) {
            board[i][j] = 'x';
          }
        }
      }
      if (bingo(board)) {
        return drawnNumbers[n] * board.reduce((unmarkedSum, row) => (unmarkedSum += sumOfArray(row.filter((val) => val != 'x').map(Number))), 0);
      }
    }
  }
}

function bingo(board) {
  // Horizontal Check
  for (let i = 0; i < 5; i++) {
    let winningBoard = true;
    for (let j = 0; j < 5; j++) {
      if (board[i][j] != 'x') {
        winningBoard = false;
      }
    }
    if (winningBoard) {
      return true;
    }
  }

  // Vertical Check
  for (let i = 0; i < 5; i++) {
    let winningBoard = true;
    for (let j = 0; j < 5; j++) {
      if (board[j][i] != 'x') {
        winningBoard = false;
      }
    }
    if (winningBoard) {
      return true;
    }
  }
  return false;
}

module.exports = { solve, delimiter: '\r\n\r\n', bingo };
