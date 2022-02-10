const { sumOfArray } = require('../../utils/functions');

const encode = (code) => '"' + code.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
const solve = (input) => sumOfArray(input.map((code) => encode(code).length - code.length));

module.exports = { solve };
