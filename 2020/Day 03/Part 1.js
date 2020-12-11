function solve(input) {
  const slope = [3, 1];
  return treeCount(input, slope);
}

function treeCount(input, slope) {
  input = input.map(x => x.split(''));
  const [right, down] = slope;
  const w = input[0].length;
  const h = input.length;
  let treeCount = 0;
  let col = right;

  for (let row = down; row < h; row += down) {
    const current = input[row][col];
    col = (col + right) % w;
    if (current == '#') {
      treeCount++;
    }
  }
  return treeCount;
}

module.exports = { solve, treeCount };
