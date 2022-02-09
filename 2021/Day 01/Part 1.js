function solve(input) {
  input = input.map(Number);
  let increases = 0;
  for (let i = 1; i < input.length; i++) {
    const depth = input[i];
    const prevDepth = input[i - 1];
    if (depth > prevDepth) {
      increases++;
    }
  }
  return increases;
}

module.exports = { solve };
