function solve(input) {
  const octopuses = input.map((row) => row.split('').map(Number));
  const flashed = new Set();
  let totalFlashes = 0;

  const flash = (i, j) => {
    totalFlashes++;
    octopuses[i][j] = 0;
    flashed.add(i * 10 + j);
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        if (octopuses[i + x] && octopuses[i + x][y + j]) {
          octopuses[i + x][y + j]++;
          if (octopuses[i + x][y + j] > 9 && !flashed.has((i + x) * 10 + j + y)) {
            flash(i + x, y + j);
          }
        }
      }
    }
  };

  for (let n = 0; n < 100; n++) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        octopuses[i][j]++;
      }
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (octopuses[i][j] > 9) {
          flash(i, j);
          flashed.clear();
        }
      }
    }
  }
  return totalFlashes;
}

module.exports = { solve };
