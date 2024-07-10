function solve(input) {
  const times = input[0].match(/\d+/g).map(Number);
  const bestDistances = input[1].match(/\d+/g).map(Number);
  const races = times.map((time, index) => [time, bestDistances[index]]);

  return races.reduce((product, [time, bestDistance]) => {
    const root1 = (time - Math.sqrt(time ** 2 - 4 * bestDistance)) / 2;
    const root2 = (time + Math.sqrt(time ** 2 - 4 * bestDistance)) / 2;

    let winningWays = Math.floor(root2) - Math.floor(root1);

    if (Number.isInteger(root1) || Number.isInteger(root2)) {
      winningWays--;
    }

    return product * winningWays;
  }, 1);
}

module.exports = { solve };
