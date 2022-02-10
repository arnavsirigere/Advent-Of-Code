const { sumOfArray } = require('../../utils/functions');

const solve = (input) => sumOfArray(input.map((group) => new Set(group.replace(/\r\n/g, '').split('')).size));

module.exports = { solve, delimiter: '\r\n\r\n' };
