const shipPos = { x: 0, y: 0 };

function solve(input) {
  const dirs = ['N', 'E', 'S', 'W'];
  let currentDir = 'E';
  for (const navInstruction of input) {
    let [, action, val] = navInstruction.match(/([NESWLRF])(\d+)/);
    val = +val;
    if (dirs.includes(action)) {
      moveShip(action, val);
    } else if (action == 'F') {
      moveShip(currentDir, val);
    } else {
      currentDir = dirs[(dirs.indexOf(currentDir) + (action == 'R' ? val : 360 - val) / 90) % 4];
    }
  }
  return Math.abs(shipPos.x) + Math.abs(shipPos.y);
}

function moveShip(action, val) {
  if (action == 'N') {
    shipPos.y += val;
  } else if (action == 'E') {
    shipPos.x += val;
  } else if (action == 'S') {
    shipPos.y -= val;
  } else if (action == 'W') {
    shipPos.x -= val;
  }
}

module.exports = { solve };
