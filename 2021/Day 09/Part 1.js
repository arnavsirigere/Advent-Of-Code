function solve(input) {
  const heightmap = input.map((row) => row.split('').map(Number));
  const w = heightmap[0].length;
  const h = heightmap.length;
  let lowPoints = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const height = heightmap[i][j];
      const adjacentLocations = findAdjacentLocations(heightmap, i, j, w, h);
      if (adjacentLocations.every((adjacentLocation) => heightmap[i][j] < adjacentLocation.height)) {
        lowPoints += height + 1;
      }
    }
  }
  return lowPoints;
}

function findAdjacentLocations(heightmap, i, j, w, h) {
  const adjacentLocations = [];
  if (i > 0) adjacentLocations.push({ height: heightmap[i - 1][j], index: (i - 1) * w + j, i: i - 1, j });
  if (i < h - 1) adjacentLocations.push({ height: heightmap[i + 1][j], index: (i + 1) * w + j, i: i + 1, j });
  if (j > 0) adjacentLocations.push({ height: heightmap[i][j - 1], index: i * w + j - 1, i, j: j - 1 });
  if (j < w - 1) adjacentLocations.push({ height: heightmap[i][j + 1], index: i * w + j + 1, i, j: j + 1 });
  return adjacentLocations;
}

module.exports = { solve, findAdjacentLocations };
