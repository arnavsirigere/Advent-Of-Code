function solve(input) {
  return input.filter(str => str.replace(/[^aeiou]/g, '').length >= 3 && /(\w)\1/.test(str) && ['ab', 'cd', 'pq', 'xy'].every(elt => !str.includes(elt))).length;
}

module.exports = { solve };
