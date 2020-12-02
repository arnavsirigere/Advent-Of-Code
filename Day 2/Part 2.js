const { getPasswordPolicies } = require('./Part 1');

function solve(input) {
  let validPasswords = 0;
  for (let passwordSet of input) {
    const [pos1, pos2, policyChar, password] = getPasswordPolicies(passwordSet);
    const bool1 = password.charAt(pos1 - 1) == policyChar;
    const bool2 = password.charAt(pos2 - 1) == policyChar;
    if (bool1 ^ bool2) {
      validPasswords++;
    }
  }
  return validPasswords;
}

module.exports = { solve };
