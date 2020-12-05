const requiredFields = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'];

function solve(input) {
  input = parseInput(input);
  let validPassports = 0;
  for (let passport of input) {
    const validPassport = requiredFields.every(fieldName => new RegExp(`${fieldName}:`).test(passport));
    if (validPassport) {
      validPassports++;
    }
  }
  return validPassports;
}

function parseInput(input) {
  return input.map(x => x.replace(new RegExp('\n', 'g'), ' '));
}

module.exports = { solve, requiredFields, parseInput, delimiter: '\n\n' };
