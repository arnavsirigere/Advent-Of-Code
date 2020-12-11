function solve(input) {
  const santa = { x: 0, y: 0 };
  const visitedHouses = ['0,0'];
  for (const dir of input) {
    updateSanta(santa, dir);
    visitedHouses.push(`${santa.x},${santa.y}`);
  }
  return new Set(visitedHouses).size;
}

function updateSanta(santa, dir) {
  //prettier-ignore
  const lookup = { '^': [0, 1], 'v': [0, -1], '>': [1, 0], '<': [-1, 0] };
  const [x, y] = lookup[dir];
  santa.x += x;
  santa.y += y;
}

module.exports = { solve, updateSanta };
