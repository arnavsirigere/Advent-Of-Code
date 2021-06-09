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
  let minDistance = Infinity;
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
    minDistance = Math.min(minDistance, totalDistance);
  }
  return minDistance;
}

function getPermutations(arr) {
  const length = arr.length;
  const result = [arr.slice()];
  const c = new Array(length).fill(0);
  let i = 1;
  let k, p;
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = arr[i];
      arr[i] = arr[k];
      arr[k] = p;
      ++c[i];
      i = 1;
      result.push(arr.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

module.exports = { solve, getPermutations };
