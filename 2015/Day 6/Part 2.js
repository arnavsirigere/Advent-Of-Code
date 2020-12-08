const { sumOfArray } = require('../../utils/functions');

function solve(input) {
  const lights = new Array(1000).fill().map(() => new Array(1000).fill().map(() => 0));
  for (const instruction of input) {
    let [, task, x1, y1, x2, y2] = instruction.match(/(turn on|turn off|toggle) (\d{1,3}),(\d{1,3}) through (\d{1,3}),(\d{1,3})/);
    [task, x1, y1, x2, y2] = [task, +x1, +y1, +x2, +y2];
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        lights[x][y] += task == 'turn on' ? 1 : task == 'toggle' ? 2 : -1;
        if (lights[x][y] < 0) {
          lights[x][y] = 0;
        }
      }
    }
  }
  return sumOfArray(lights.map(sumOfArray));
}

module.exports = { solve };
