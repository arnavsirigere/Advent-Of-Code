const { sumOfArray } = require('../../utils/functions');
let addresses = [];

function solve(input) {
  const memory = {};
  let bitmask;
  for (const line of input) {
    if (line.startsWith('mask')) {
      bitmask = line.split(' = ')[1];
    } else {
      const [, address, value] = line.match(/(\d+).*?(\d+)/);
      const maskedAddress = applyMask(address, bitmask);
      addresses = [];
      getAddresses(maskedAddress);
      for (const memAddress of addresses) {
        memory[memAddress] = +value;
      }
    }
  }
  return sumOfArray(Object.values(memory));
}

function getAddresses(address, index = 0) {
  if (index == address.length) {
    addresses.push(parseInt(address, 2));
    return;
  }
  if (address.charAt(index) == 'X') {
    const address1 = address.replace(index, '0');
    getAddresses(address1, index + 1);
    const address2 = address.replace(index, '1');
    getAddresses(address2, index + 1);
  } else {
    getAddresses(address, index + 1);
  }
}

function applyMask(address, mask) {
  address = (+address).toString(2).padStart(36, '0');
  let result = '';
  for (let i = 0; i < address.length; i++) {
    const maskChar = mask.charAt(i);
    result += maskChar == '0' ? address.charAt(i) : maskChar;
  }
  return result;
}

String.prototype.replace = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

module.exports = { solve };
