function solve(input) {
  const executed = [];
  let index = 0;
  let accumulator = 0;
  while (true) {
    const instruction = input[index];
    if (executed.includes(index)) {
      return accumulator;
    }
    executed.push(index);
    let [, operation, arg] = instruction.match(/(\w+)\s([+-]\d+)/);
    arg = +arg;
    if (operation == 'acc') {
      accumulator += arg;
    } else if (operation == 'jmp') {
      index += arg - 1;
    }
    index++;
  }
}

module.exports = { solve };
