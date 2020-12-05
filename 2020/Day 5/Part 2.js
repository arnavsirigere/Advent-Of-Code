let { seatIds } = require('./Part 1');

function solve() {
  seatIds = seatIds.sort((a, b) => a - b);
  for (let i = 1; i < seatIds.length - 1; i++) {
    if (seatIds[i] - seatIds[i - 1] != 1) {
      return seatIds[i] - 1;
    }
  }
}

module.exports = { solve };
