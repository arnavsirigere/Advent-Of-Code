function solve(input) {
  const polymerTemplate = input[0].replace(/\r\n/, '');
  const insertionRules = new Map(input[1].split('\r\n').map((rule) => rule.split(' -> ')));

  let polymers = new Map();
  const quantities = {};

  for (let i = 0; i < polymerTemplate.length; i++) {
    const monomer = polymerTemplate[i];
    quantities[monomer] = (quantities[monomer] || 0) + 1;
    if (i < polymerTemplate.length - 1) {
      const pair = polymerTemplate.substring(i, i + 2);
      polymers.set(pair, (polymers.get(pair) || 0) + 1);
    }
  }

  const polymerize = (steps) => {
    for (let step = 0; step < steps; step++) {
      const nextPolymers = new Map();
      for (const polymer of Array.from(polymers.keys())) {
        const polymerCount = polymers.get(polymer);
        const [monomer1, monomer2] = polymer.split('');
        const insertion = insertionRules.get(polymer);
        nextPolymers.set(monomer1 + insertion, (nextPolymers.get(monomer1 + insertion) || 0) + polymerCount);
        nextPolymers.set(insertion + monomer2, (nextPolymers.get(insertion + monomer2) || 0) + polymerCount);
        quantities[insertion] = (quantities[insertion] || 0) + polymerCount;
      }
      polymers = new Map(nextPolymers);
    }
  };

  polymerize(10);
  return Math.max(...Object.values(quantities)) - Math.min(...Object.values(quantities));
}

module.exports = { solve, delimiter: '\r\n\r\n' };
