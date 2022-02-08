const { sumOfArray } = require('../../utils/functions');

function solve(input) {
  const questions = input.map((group) => new Set(group.split('')).size);
  return sumOfArray(questions);
}

module.exports = { solve, delimiter: '\r\n\r\n' };
