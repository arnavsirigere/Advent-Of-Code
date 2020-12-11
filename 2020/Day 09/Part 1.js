const { twoSum } = require('../Day 1/Part 1');

function solve(input) {
  input = input.map(Number);
  const preambleLength = 25;
  for (let i = preambleLength; i < input.length; i++) {
    const num = input[i];
    if (!twoSum(input.filter((_, index) => index >= i - preambleLength && index <= i), num)) {
      module.exports.invalid = num;
      return num;
    }
  }
}

module.exports = { solve };
