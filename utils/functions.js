function productOfArray(nums) {
  return nums.reduce((acc, val) => acc * val, 1);
}

function sumOfArray(nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

module.exports = { productOfArray, sumOfArray };
