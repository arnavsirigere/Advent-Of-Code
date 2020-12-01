function productOfArray(nums) {
  return nums.reduce((acc, val) => acc * val, 1);
}

module.exports = { productOfArray };
