const { lookAndSay } = require('./Part 1');

function solve(seq) {
  return lookAndSay(seq, 50);
}

module.exports = { solve };
