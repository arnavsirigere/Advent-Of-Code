const { updateSanta } = require('./Part 1');

function solve(input) {
  const santa = { x: 0, y: 0 };
  const robotSanta = { x: 0, y: 0 };
  const visitedHouses = ['0,0'];
  for (let i = 0; i < input.length; i += 2) {
    updateSanta(santa, input.charAt(i));
    updateSanta(robotSanta, input.charAt(i + 1));
    visitedHouses.push(`${santa.x},${santa.y}`);
    visitedHouses.push(`${robotSanta.x},${robotSanta.y}`);
  }
  return new Set(visitedHouses).size;
}

module.exports = { solve };
