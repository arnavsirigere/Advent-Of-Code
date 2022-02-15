function solve(input) {
  const caveSystem = new Map();
  // Add nodes
  input
    .map((connection) => connection.split('-'))
    .flat()
    .forEach((cave) => caveSystem.set(cave, []));
  // Build edges
  for (const connection of input) {
    const [cave1, cave2] = connection.split('-');
    caveSystem.get(cave1).push(cave2);
    caveSystem.get(cave2).push(cave1);
  }

  let totalPaths = 0;

  const dfs = (cave = 'start', visited = [], visitedTwice = false) => {
    visited.push(cave);
    if (cave == 'end') {
      return ++totalPaths;
    }
    for (const adjacentCave of caveSystem.get(cave)) {
      if (adjacentCave == 'start') {
        continue;
      }
      if (/[a-z]/.test(adjacentCave) && visited.includes(adjacentCave)) {
        if (visitedTwice || visited.filter((v) => v == adjacentCave).length >= 2) {
          continue;
        }
        dfs(adjacentCave, [...visited], true);
      } else {
        dfs(adjacentCave, [...visited], visitedTwice);
      }
    }
  };

  dfs();
  return totalPaths;
}

module.exports = { solve };
