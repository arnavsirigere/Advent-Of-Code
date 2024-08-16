function solve(input) {
  const instructions = input[0].split('');
  const network = {};

  for (const line of input[1].split('\r\n')) {
    const [node, left, right] = line.match(/\w{3}/g);
    network[node] = [left, right];
  }

  let steps = 0;
  let element = 'AAA';

  while (element != 'ZZZ') {
    const instruction = instructions.shift();
    instructions.push(instruction);
    element = network[element][instruction == 'L' ? 0 : 1];
    steps++;
  }

  return steps;
}

module.exports = { solve, delimiter: '\r\n\r\n' };
