function solve(input) {
  const octopuses = input.map((row) => row.split('').map(Number));
  const flashed = new Set();

  const flash = (i, j) => {
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

  let steps = 1;

  while (true) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        octopuses[i][j]++;
      }
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (octopuses[i][j] > 9) {
          flash(i, j);
          if (flashed.size == 100) {
            return steps;
          }
          flashed.clear();
        }
      }
    }
    steps++;
  }
}

module.exports = { solve };

module.exports = { solve };
