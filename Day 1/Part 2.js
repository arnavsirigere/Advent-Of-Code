const { twoSum } = require('./Part 1');
const { productOfArray } = require('../utils/functions');

function solve(input) {
  input = input.map(num => +num);
  const target = 2020;
  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    const diff = target - num;
    const nums = twoSum(input, diff);
    if (nums) {
      nums.push(num);
      return productOfArray(nums);
    }
  }
}

module.exports = { solve };
