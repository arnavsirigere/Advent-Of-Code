const { findAdjacentLocations } = require('./Part 1.js');

function solve(input) {
  const heightmap = input.map((row) => row.split('').map(Number));
  const w = heightmap[0].length;
  const h = heightmap.length;
  const basinSizes = [];
  const foundBasins = new Set();

  const findBasinSize = (i, j, basinSize = 0) => {
    const height = heightmap[i][j];
    let adjacentLocations = findAdjacentLocations(heightmap, i, j, w, h);
    if (!adjacentLocations.every((adjacentLocation) => height < adjacentLocation.height) && !basinSize) return 0;
    adjacentLocations = adjacentLocations.filter((adjacentLocation) => adjacentLocation.height != 9 && !foundBasins.has(adjacentLocation.index));
    adjacentLocations.forEach((adjacentLocation) => foundBasins.add(adjacentLocation.index));
    return adjacentLocations.length + adjacentLocations.map((adjacentLocation) => findBasinSize(adjacentLocation.i, adjacentLocation.j, adjacentLocations.length)).reduce((acc, val) => acc + val, 0);
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const basinSize = findBasinSize(i, j);
      basinSizes.push(basinSize);
    }
  }

  return basinSizes.sort((a, b) => b - a).slice(0, 3).reduce((acc, val) => acc * val);
}

module.exports = { solve };
