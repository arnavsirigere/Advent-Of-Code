function solve(input) {
  const totalBits = input[0].length;
  const gammaBits = [];
  input = input.map((binary) => parseInt(binary, 2));
  for (let i = 0; i < totalBits; i++) {
    const even = input.filter((val) => val % 2 == 0).length;
    gammaBits.unshift(even > input.length - even ? 0 : 1);
    input = input.map((val) => val >> 1);
  }
  const gammaRate = parseInt(gammaBits.join(''), 2);
  const epsilonRate = parseInt(gammaBits.map((bit) => 1 - bit).join(''), 2);
  return gammaRate * epsilonRate;
}

module.exports = { solve };
