function solve(input) {
  input = input.map(Number);
  input.push(Math.max(...input) + 3);
  const differences = { one: 0, three: 0 };
  let currentAdapter = 0;
  while (currentAdapter !== Infinity) {
    let prevAdapter = currentAdapter;
    currentAdapter = getAdapter(currentAdapter, input);
    const difference = currentAdapter - prevAdapter;
    if (difference == 1) {
      differences.one++;
    } else if (difference == 3) {
      differences.three++;
    }
  }
  return differences.one * differences.three;
}

const getAdapter = (joltage, adapters) => Math.min(...adapters.filter(adapter => adapter - joltage <= 3 && adapter - joltage > 0));

module.exports = { solve };
