function solve(input) {
  const crabPositions = input.split(',').map(Number).sort((a, b) => a - b);
  const median = crabPositions[Math.floor(crabPositions.length / 2)];
  return crabPositions.reduce((totalFuel, position) => totalFuel + Math.abs(position - median), 0);
}

module.exports = { solve };
