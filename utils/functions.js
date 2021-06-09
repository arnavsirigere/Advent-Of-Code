function productOfArray(nums) {
  return nums.reduce((acc, val) => acc * val, 1);
}

function sumOfArray(nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

function parseInput(input, str) {
  return input.map((x) => x.replace(new RegExp('\n', 'g'), str));
}

module.exports = { productOfArray, sumOfArray, parseInput };
