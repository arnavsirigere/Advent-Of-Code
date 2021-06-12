const { incrementStr, validPswd } = require('./Part 1');

function solve(pswd) {
  for (let i = 0; i < 2; i++) {
    do {
      pswd = incrementStr(pswd);
    } while (!validPswd(pswd));
  }
  return pswd;
}

module.exports = { solve };
