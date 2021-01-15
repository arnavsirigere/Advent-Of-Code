const { sumOfArray } = require('../../utils/functions');

function solve(input) {
  return sumOfArray(input.map(code => 2 + code.replace(/"/g, '\\"').replace(/\\/g, '\\\\').length - code.length));
}

module.exports = { solve };
