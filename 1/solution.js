const { productOfArray } = require('../utils/functions');

function solve(input) {
  const target = 2020;
  const nums = twoSum(input, target);
  return productOfArray(nums);
}

function twoSum(input, target) {
  const inputCopy = [];
  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    const diff = target - num;
    if (inputCopy.includes(diff) && num !== diff) {
      return [num, diff];
    }
    inputCopy.push(num);
  }
}

module.exports = { solve, twoSum };
