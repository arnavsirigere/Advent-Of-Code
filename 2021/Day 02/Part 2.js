function solve(input) {
  let aim = 0;
  let depth = 0;
  let position = 0;
  for (const command of input) {
    let [direction, val] = command.split(' ');
    val = parseInt(val);
    if (direction == 'down') {
      aim += val;
    } else if (direction == 'up') {
      aim -= val;
    } else {
      depth += aim * val;
      position += val;
    }
  }
  return position * depth;
}

module.exports = { solve };
