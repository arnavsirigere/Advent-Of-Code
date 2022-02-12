const { sumOfArray } = require('../../utils/functions.js');

function solve(input) {
  const vents = input.map((entry) => entry.match(/\d+/g).map(Number));
  const fieldSize = vents.reduce((max, vent) => Math.max(max, ...vent), 0) + 1;
  const field = new Array(fieldSize).fill().map((_) => new Array(fieldSize).fill('.'));
  for (const [x1, y1, x2, y2] of vents) {
    // Vertical Lines
    if (x1 == x2) {
      const start = Math.min(y1, y2);
      const end = Math.max(y1, y2);
      for (let i = start; i <= end; i++) {
        field[i][x1] = field[i][x1] == '.' ? 1 : field[i][x1] + 1;
      }
    }
    // Horizontal Lines
    else if (y1 == y2) {
      const start = Math.min(x1, x2);
      const end = Math.max(x1, x2);
      for (let i = start; i <= end; i++) {
        field[y1][i] = field[y1][i] == '.' ? 1 : field[y1][i] + 1;
      }
    }
    // Diagonal Lines
    else {
      const startY = Math.min(y1, y2);
      const endY = Math.max(y1, y2);
      const startX = startY == y1 ? x1 : x2;
      const endX = endY == y1 ? x1 : x2;
      for (let i = startY; i <= endY; i++) {
        const j = startX + (i - startY) * (endX > startX ? 1 : -1);
        field[i][j] = field[i][j] == '.' ? 1 : field[i][j] + 1;
      }
    }
  }
  return sumOfArray(field.map((row) => row.filter((elt) => elt != '.' && elt > 1).length));
}

module.exports = { solve };
