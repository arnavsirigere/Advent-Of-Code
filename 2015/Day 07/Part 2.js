const { findSignal } = require('./Part 1');

function solve(input) {
  const index = input.indexOf(input.find(circuit => circuit.endsWith('-> b')));
  const signal = findSignal('a', input);
  input[index] = `${signal} -> b`;
  return findSignal('a', input);
}

module.exports = { solve };
