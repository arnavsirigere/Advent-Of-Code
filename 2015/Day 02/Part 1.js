function solve(input) {
  let floor = 0;
  for (const char of input) {
    floor += char == '(' ? 1 : -1;
  }
  return floor;
}

module.exports = { solve };
