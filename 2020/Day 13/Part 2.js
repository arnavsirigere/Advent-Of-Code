const BigNumber = require('big-number');

BigNumber.prototype.copy = function () {
  return BigNumber(this.toString());
};

function solve(input) {
  const busIds = input[1].split(',');
  const nums = busIds.filter((elt) => elt !== 'x').map(BigNumber);
  const rems = busIds.map((elt, index) => (elt !== 'x' ? (index == 0 ? 0 : BigNumber(elt).subtract(index % +elt)) : null)).filter((num) => num !== null); // Remainders
  const product = nums.reduce((prod, num) => prod.mult(num), BigNumber(1));
  const productDivided = nums.map((num) => product.copy().div(num));
  const multInverse = productDivided.map((num, index) => modInverse(num.copy(), nums[index].copy()));
  return rems
    .map((rem, index) => productDivided[index].mult(multInverse[index]).mult(rem))
    .reduce((sum, num) => sum.add(num), BigNumber(0))
    .mod(product);
}

function modInverse(a, m) {
  a = a.mod(m);
  for (let x = BigNumber(1); x.lt(m); x.add(1)) {
    if (a.copy().mult(x).mod(m).equals(1)) {
      return x;
    }
  }
}

module.exports = { solve };
