const shipPos = { x: 0, y: 0 };
const waypoint = { x: 10, y: 1 };

function solve(input) {
  for (const navInstruction of input) {
    let [, action, val] = navInstruction.match(/([NESWLRF])(\d+)/);
    val = +val;
    if (action == 'N') {
      waypoint.y += val;
    } else if (action == 'E') {
      waypoint.x += val;
    } else if (action == 'S') {
      waypoint.y -= val;
    } else if (action == 'W') {
      waypoint.x -= val;
    } else if (action == 'F') {
      shipPos.x += waypoint.x * val;
      shipPos.y += waypoint.y * val;
    } else {
      const angle = action == 'R' ? val : 360 - val;
      for (let _ = 0; _ < angle; _ += 90) {
        const temp = waypoint.y;
        waypoint.y = -waypoint.x;
        waypoint.x = temp;
      }
    }
  }
  return Math.abs(shipPos.x) + Math.abs(shipPos.y);
}

module.exports = { solve };
