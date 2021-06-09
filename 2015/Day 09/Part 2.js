const { getPermutations } = require('./Part 1');

function solve(input) {
  input = input.join('\n');
  const locations = new Set();
  const regex = /(\w+) to (\w+)/g;
  while ((result = regex.exec(input))) {
    const [, location1, location2] = result;
    locations.add(location1);
    locations.add(location2);
  }
  routes = getPermutations(Array.from(locations));
  let maxDistance = -Infinity;
  for (const route of routes) {
    let totalDistance = 0;
    for (let i = 0; i < route.length - 1; i++) {
      let distanceRegex = new RegExp(`${route[i]} to ${route[i + 1]} = (\\d+)`);
      if (!distanceRegex.test(input)) {
        distanceRegex = new RegExp(`${route[i + 1]} to ${route[i]} = (\\d+)`);
      }
      const [, distance] = input.match(distanceRegex);
      totalDistance += +distance;
    }
    maxDistance = Math.max(maxDistance, totalDistance);
  }
  return maxDistance;
}

module.exports = { solve };
