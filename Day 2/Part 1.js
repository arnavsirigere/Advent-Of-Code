function solve(input) {
  let validPasswords = 0;
  for (let passwordSet of input) {
    const [min, max, policyChar, password] = getPasswordPolicies(passwordSet);
    const charCount = (password.match(new RegExp(policyChar, 'g')) || []).length;
    if (charCount >= min && charCount <= max) {
      validPasswords++;
    }
  }
  return validPasswords;
}

function getPasswordPolicies(passwordSet) {
  const [policyNum] = passwordSet.match(/\d+-\d+/);
  const [num1, num2] = policyNum.split('-');
  const [policyChar] = passwordSet.match(/[A-Z]/i);
  const [_, password] = passwordSet.match(/.*:\s(\w+)/);
  return [num1, num2, policyChar, password];
}

module.exports = { solve, getPasswordPolicies };
