const { requiredFields } = require('./Part 1');

function solve(input) {
  let validPassports = 0;
  for (let passport of input) {
    if (validatePassport(passport)) {
      validPassports++;
    }
  }
  return validPassports;
}

function validatePassport(passport) {
  if (!requiredFields.every(fieldName => new RegExp(`${fieldName}:`).test(passport))) return false;
  const fields = passport.split(' ');
  return fields.every(field => {
    const [fieldName, fieldValue] = field.split(':');
    return validator[fieldName](fieldValue);
  });
}

const validator = {
  byr: byr => byr.length == 4 && between(+byr, 1920, 2002),
  iyr: iyr => iyr.length == 4 && between(+iyr, 2010, 2020),
  eyr: eyr => eyr.length == 4 && between(+eyr, 2020, 2030),
  hcl: hcl => /\#[a-f0-9]{6}/.test(hcl),
  ecl: ecl => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl),
  pid: pid => /^\d{9}$/.test(pid),
  cid: () => true,
  hgt: hgt => {
    if (!/\d{2,3}(in|cm)/.test(hgt)) return false;
    let [_, length, metricType] = hgt.match(/(\d{2,3})((in|cm))/);
    length = +length;
    if (metricType == 'in') {
      return between(length, 59, 76);
    } else if (metricType == 'cm') {
      return between(length, 150, 193);
    }
    return false;
  }
};

const between = (val, min, max) => val >= min && val <= max;

module.exports = { solve };
