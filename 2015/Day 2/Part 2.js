const { productOfArray } = require('../../utils/functions');

function solve(input) {
  let totalFeet = 0;
  for (let dimensions of input) {
    dimensions = dimensions.split('x').map(dim => +dim);
    const volume = productOfArray(dimensions);
    dimensions.splice(dimensions.indexOf(Math.max(...dimensions)), 1);
    const [l, b] = dimensions;
    const perimeter = calcPerimeter(l, b);
    totalFeet += volume + perimeter;
  }
  return totalFeet;
}

const calcPerimeter = (l, b) => 2 * (l + b);

module.exports = { solve };
