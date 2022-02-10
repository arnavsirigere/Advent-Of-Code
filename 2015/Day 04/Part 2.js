const { findHash } = require('./Part 1');

function solve(input) {
  return findHash(input, '000000');
}

module.exports = { solve };
