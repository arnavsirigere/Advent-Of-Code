const { sumOfArray } = require('../../utils/functions');

function solve(input) {
  const lights = new Array(1000).fill().map(() => new Array(1000).fill().map(() => false));
  for (const instruction of input) {
    let [, task, x1, y1, x2, y2] = instruction.match(/(turn on|turn off|toggle) (\d{1,3}),(\d{1,3}) through (\d{1,3}),(\d{1,3})/);
    [task, x1, y1, x2, y2] = [task, +x1, +y1, +x2, +y2];
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        const light = lights[x][y];
        lights[x][y] = task == 'turn off' ? false : task == 'turn on' ? true : !light;
      }
    }
  }
  return sumOfArray(lights.map(row => row.reduce((acc, val) => (val ? ++acc : acc), 0)));
}

module.exports = { solve };
