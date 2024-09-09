/*
  Starting Node - Node ending in 'A'
  Ending Node - Node ending in 'Z'

  KEY OBSERVATIONS:
  1) A starting node leads to only one ending node, number of starting nodes = number of ending nodes

  2) If it takes N steps to go from a starting node to the ending node, it takes N steps to go to the ending node again,
  starting from the ending node, which suggests using LCM of all path steps

  3) N is always an integral multiple of total instructions given in input, so popping and pushing instructions as done here,
  modifying and reusing the original instructions is not a problem
*/

function solve(input) {
  const instructions = input[0].split('');
  const network = {};
  const startingNodes = [];

  for (const line of input[1].split('\r\n')) {
    const [node, left, right] = line.match(/\w{3}/g);
    network[node] = [left, right];
    if (node.charAt(node.length - 1) == 'A') {
      startingNodes.push(node);
    }
  }

  const pathSteps = [];

  for (let element of startingNodes) {
    let stepCount = 0;

    while (element.charAt(element.length - 1) != 'Z') {
      const instruction = instructions.shift();
      instructions.push(instruction);
      element = network[element][instruction == 'L' ? 0 : 1];
      stepCount++;
    }

    pathSteps.push(stepCount);
  }

  return LCMOfArr(pathSteps);
}

function LCMOfArr(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = LCM(result, arr[i]);
  }
  return result;
}

function GCD(a, b) {
  return b == 0 ? a : GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

module.exports = { solve, delimiter: '\r\n\r\n' };
