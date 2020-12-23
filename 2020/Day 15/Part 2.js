const { getNthSpoken } = require('./Part 1');

function solve(input) {
  return getNthSpoken(input, 30000000);
}

module.exports = { solve };
