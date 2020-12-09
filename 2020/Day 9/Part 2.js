const { sumOfArray } = require('../../utils/functions');
const { invalid } = require('./Part 1');

function solve(input) {
  input = input.map(Number);
  for (let i = 0; i < input.length; i++) {
    const nums = [];
    for (let j = i; j < input.length; j++) {
      if (input[j] !== invalid) {
        nums.push(input[j]);
      }
      if (sumOfArray(nums) == invalid) {
        return Math.min(...nums) + Math.max(...nums);
      }
    }
  }
}

module.exports = { solve };
