let circuits;
let signals = {};
//prettier-ignore
const bitwiseOperations = {
  NOT    :  num         => 65535 - num,
  RSHIFT : (num1, num2) => num1 >> num2,
  LSHIFT : (num1, num2) => num1 << num2,
  AND    : (num1, num2) => num1 & num2,
  OR     : (num1, num2) => num1 | num2
};

function solve(input) {
  circuits = input;
  return findSignal('a');
}

function findSignal(targetWire, c) {
  if (c) {
    circuits = c;
    signals = {};
  }
  if (signals[targetWire]) return signals[targetWire];
  if (!isNaN(targetWire)) return +targetWire;
  const circuit = circuits.find(circuit => circuit.endsWith(`-> ${targetWire}`));
  const signal = circuit.split(' -> ')[0];
  if (!isNaN(signal)) {
    signals[targetWire] = +signal;
    return +signal;
  } else if (/^\w{1,2}$/.test(signal)) {
    const targetSignal = findSignal(signal);
    signals[signal] = targetSignal;
    return targetSignal;
  } else if (/NOT \w+/.test(circuit)) {
    const [, wire] = circuit.match(/NOT (\w+)/);
    const targetSignal = bitwiseOperations.NOT(findSignal(wire));
    signals[targetWire] = targetSignal;
    return targetSignal;
  } else {
    const [, signal1, gate, signal2] = signal.match(/(\w+) (AND|OR|LSHIFT|RSHIFT) (\w+)/);
    if (gate == 'AND') {
      const targetSignal = bitwiseOperations.AND(findSignal(signal1), findSignal(signal2));
      signals[targetWire] = targetSignal;
      return targetSignal;
    } else if (gate == 'OR') {
      const targetSignal = bitwiseOperations.OR(findSignal(signal1), findSignal(signal2));
      signals[targetWire] = targetSignal;
      return targetSignal;
    } else if (gate == 'LSHIFT') {
      const targetSignal = bitwiseOperations.LSHIFT(findSignal(signal1), findSignal(signal2));
      signals[targetWire] = targetSignal;
      return targetSignal;
    } else if (gate == 'RSHIFT') {
      const targetSignal = bitwiseOperations.RSHIFT(findSignal(signal1), findSignal(signal2));
      signals[targetWire] = targetSignal;
      return targetSignal;
    }
  }
}

module.exports = { solve, findSignal };
