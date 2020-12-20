const { sumOfArray } = require('../../utils/functions');

function solve(input) {
  const memory = {};
  let bitmask;
  for (const line of input) {
    if (line.startsWith('mask')) {
      bitmask = line.split(' = ')[1];
    } else {
      const [, address, value] = line.match(/(\d+).*?(\d+)/);
      memory[address] = applyBitmask(value, bitmask);
    }
  }
  return sumOfArray(Object.values(memory));
}

function applyBitmask(value, bitmask) {
  const binaryVal = (+value).toString(2).padStart(36, '0');
  let result = '';
  for (let i = 0; i < binaryVal.length; i++) {
    const bitmaskChar = bitmask.charAt(i);
    result += bitmaskChar == 'X' ? binaryVal.charAt(i) : bitmaskChar;
  }
  return parseInt(result, 2);
}

module.exports = { solve };
