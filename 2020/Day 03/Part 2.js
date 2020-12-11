const { treeCount } = require('./Part 1');
const { productOfArray } = require('../../utils/functions');

function solve(input) {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
  ];
  const treeCounts = [];
  for (const slope of slopes) {
    treeCounts.push(treeCount(input, slope));
  }
  return productOfArray(treeCounts);
}

module.exports = { solve };
