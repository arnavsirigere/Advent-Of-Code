function solve(input) {
  return getNthSpoken(input, 2020);
}

function getNthSpoken(input, n) {
  const spoken = Array(n);
  const len = input.length;
  for (let i = 0; i < len; i++) {
    const val = input[i];
    spoken[val] = i + 1;
  }
  let lastSpoken = input[len];
  for (let i = len; i < n; i++) {
    if (spoken[lastSpoken]) {
      const lastTurn = spoken[lastSpoken];
      spoken[lastSpoken] = i;
      lastSpoken = i - lastTurn;
    } else {
      spoken[lastSpoken] = i;
      lastSpoken = 0;
    }
  }
  return lastSpoken;
}

module.exports = { solve, getNthSpoken, delimiter: ',' };
