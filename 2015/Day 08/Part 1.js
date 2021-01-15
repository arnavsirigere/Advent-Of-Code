const { sumOfArray } = require('../../utils/functions');

function solve(input) {
  return sumOfArray(input.map(code => code.length - eval(code).length));
}

module.exports = { solve };
