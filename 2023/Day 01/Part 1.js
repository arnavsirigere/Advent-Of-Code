function solve(input) {
  return input.reduce((sum, line) => {
    const matches = line.match(/\d/g);

    const firstDigit = parseInt(matches[0]);
    const lastDigit = parseInt(matches[matches.length - 1]);

    return sum + firstDigit * 10 + lastDigit;
  }, 0);
}

module.exports = { solve };
