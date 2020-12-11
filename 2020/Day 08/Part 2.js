function solve(input) {
  const executed = {};
  let index = 0;
  while (true) {
    const instruction = input[index];
    if (Object.keys(executed).map(Number).includes(index)) {
      break;
    }
    executed[index] = instruction;
    let [, operation, arg] = instruction.match(/(\w+)\s([+-]\d+)/);
    arg = +arg;
    if (operation == 'jmp') {
      index += arg - 1;
    }
    index++;
  }
  const keys = Object.keys(executed).map(Number);
  for (let key of keys) {
    key = +key;
    const instruction = executed[key];
    let [, operation, arg] = instruction.match(/(\w+)\s([+-]\d+)/);
    if (operation == 'jmp' || operation == 'nop') {
      const newOperation = `${operation == 'jmp' ? 'nop' : 'jmp'} ${arg}`;
      const newInstructions = input.slice();
      newInstructions[key] = newOperation;
      let index = 0;
      let accumulator = 0;
      let hack = 0;
      while (hack < 1000 && index < newInstructions.length) {
        const newInstruction = newInstructions[index];
        let [, operation, arg] = newInstruction.match(/(\w+)\s([+-]\d+)/);
        arg = +arg;
        if (operation == 'acc') {
          accumulator += arg;
        } else if (operation == 'jmp') {
          index += arg - 1;
        }
        index++;
        hack++;
        if (index == newInstructions.length) {
          return accumulator;
        }
      }
    }
  }
}

module.exports = { solve };
