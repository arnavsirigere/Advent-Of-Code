const { productOfArray } = require('../../utils/functions');

function solve(input) {
  let totalSqFeet = 0;
  for (let dimensions of input) {
    dimensions = dimensions.split('x').map(dim => +dim);
    const [l, b, h] = dimensions;
    const surfaceArea = calcSurfaceArea(l, b, h);
    dimensions.splice(dimensions.indexOf(Math.max(...dimensions)), 1);
    const extra = productOfArray(dimensions);
    totalSqFeet += surfaceArea + extra;
  }
  return totalSqFeet;
}

const calcSurfaceArea = (l, b, h) => 2 * l * b + 2 * b * h + 2 * l * h;

module.exports = { solve };
