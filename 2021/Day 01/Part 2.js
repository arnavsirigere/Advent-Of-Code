const { sumOfArray } = require('../../utils/functions.js');

function solve(input) {
  input = input.map(Number);
  const windowGap = 3;
  let increases = 0;
  for (let i = 0; i < input.length - windowGap; i++) {
    const window1 = input.slice(i, i + windowGap);
    const window2 = input.slice(i + 1, i + windowGap + 1);
    if (sumOfArray(window2) > sumOfArray(window1)) {
      increases++;
    }
  }
  return increases;
}

module.exports = { solve };
