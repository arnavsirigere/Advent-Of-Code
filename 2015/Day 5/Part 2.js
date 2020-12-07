function solve(input) {
  return input.filter(str => /(\w{2}).*1?\1/.test(str) && /(\w)\w\1/.test(str)).length;
}

module.exports = { solve };
