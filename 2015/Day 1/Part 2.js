function solve(input) {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    floor += input.charAt(i) == '(' ? 1 : -1;
    if (floor == -1) {
      return i + 1;
    }
  }
}

module.exports = { solve };
