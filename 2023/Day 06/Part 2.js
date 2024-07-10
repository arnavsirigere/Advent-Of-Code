function solve(input) {
  const time = Number(input[0].match(/\d+/g).join(''));
  const bestDistance = Number(input[1].match(/\d+/g).join(''));

  const root1 = (time - Math.sqrt(time ** 2 - 4 * bestDistance)) / 2;
  const root2 = (time + Math.sqrt(time ** 2 - 4 * bestDistance)) / 2;

  let winningWays = Math.floor(root2) - Math.floor(root1);

  if (Number.isInteger(root1) || Number.isInteger(root2)) {
    winningWays--;
  }

  return winningWays;
}

module.exports = { solve };
