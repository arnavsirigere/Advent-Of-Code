function solve(input) {
  let depth = 0;
  let position = 0;
  for (const command of input) {
    let [direction, val] = command.split(' ');
    val = parseInt(val);
    if (direction == 'down') {
      depth += val;
    } else if (direction == 'up') {
      depth -= val;
    } else {
      position += val;
    }
  }
  return position * depth;
}

module.exports = { solve };
