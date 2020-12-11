const { sumOfArray, parseInput } = require('../../utils/functions');

function solve(input) {
  input = parseInput(input, '');
  const questions = input.map(group => new Set(group.split('')).size);
  return sumOfArray(questions);
}

module.exports = { solve, delimiter: '\n\n' };
