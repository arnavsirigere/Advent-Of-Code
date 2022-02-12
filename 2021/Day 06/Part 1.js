const { sumOfArray } = require('../../utils/functions.js');

const solve = (input) => countLanternfish(input, 80);

function countLanternfish(timers, days) {
  const lanternfish = new Array(9).fill(0);
  timers.split(',').forEach((timer) => lanternfish[+timer]++);
  for (let i = 0; i < days; i++) {
    const newLanternfish = lanternfish.shift();
    lanternfish.push(newLanternfish);
    lanternfish[6] += newLanternfish;
  }
  return sumOfArray(lanternfish);
}

module.exports = { solve, countLanternfish };
