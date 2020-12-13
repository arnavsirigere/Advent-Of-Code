const BigNumber = require('big-number');

function solve(input) {
  const busIds = input[1].split(',');
  const nums = busIds.filter(elt => elt !== 'x').map(BigNumber);
  const rems = busIds.map((elt, index) => (elt !== 'x' ? (index == 0 ? 0 : BigNumber(elt).subtract(index % +elt)) : null)).filter(num => num !== null); // Remainders
  const product = nums.reduce((prod, num) => prod.mult(num), BigNumber(1));
  const productDivided = nums.map(num => BigNumber(product.toString()).div(num));
  const multInverse = productDivided.map((num, index) => modInverse(BigNumber(num.toString()), BigNumber(nums[index].toString())));
  return rems
    .map((rem, index) => productDivided[index].mult(multInverse[index]).mult(rem))
    .reduce((sum, num) => sum.add(num), BigNumber(0))
    .mod(product);
}

function modInverse(a, m) {
  a = a.mod(m);
  for (let x = BigNumber(1); x.lt(m); x.add(1)) {
    if (BigNumber(a.toString()).mult(x).mod(m).equals(1)) {
      return x;
    }
  }
}

module.exports = { solve };
