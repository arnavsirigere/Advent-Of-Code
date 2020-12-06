const crypto = require('crypto');

function solve(input) {
  return findHash(input, '00000');
}

function findHash(key, leadingStr) {
  let num = 0;
  while (!crypto.createHash('md5').update(`${key}${num}`).digest('hex').startsWith(leadingStr)) {
    num++;
  }
  return num;
}
module.exports = { solve, findHash };
