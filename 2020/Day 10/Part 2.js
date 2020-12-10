function solve(input) {
  const adapters = input.map(Number).sort((a, b) => a - b);
  adapters.unshift(0);
  const permutations = new Array(adapters.length).fill().map((_, i) => (i == 0 ? 1 : 0));
  for (let i = 0; i < adapters.length; i++) {
    for (let j = i - 3; j < i; j++) {
      if (adapters[i] - adapters[j] <= 3) {
        permutations[i] += permutations[j];
      }
    }
  }
  return permutations.pop();
}

module.exports = { solve };
