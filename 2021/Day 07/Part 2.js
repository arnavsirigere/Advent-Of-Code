function solve(input) {
  const crabPositions = input.split(',').map(Number);
  const mean = Math.floor(crabPositions.reduce((acc, val) => acc + val) / crabPositions.length);
  return crabPositions.reduce((totalFuel, position) => totalFuel + calculateFuel(Math.abs(position - mean)), 0);
}

function calculateFuel(steps) {
  let fuel = 0;
  for (let i = 1; i <= steps; i++) {
    fuel += i;
  }
  return fuel;
}

module.exports = { solve };
