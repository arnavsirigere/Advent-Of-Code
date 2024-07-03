function solve(input) {
  const schematic = input.map((row) => row.split(''));
  const gears = {};

  for (let i = 0; i < schematic.length; i++) {
    for (let j = 0; j < schematic[i].length; j++) {
      if (/\d/.test(schematic[i][j])) {
        const numPos = { row: i, start: j };
        let num = [];

        while (/\d/.test(schematic[i][j])) {
          num.push(schematic[i][j]);
          j++;
        }

        j--;
        numPos.end = j;

        for (const gear of findGears(numPos, schematic)) {
          if (!gears[gear]) {
            gears[gear] = [];
          }
          gears[gear].push(parseInt(num.join('')));
        }
      }
    }
  }

  return Object.values(gears)
    .filter((arr) => arr.length == 2)
    .reduce((sum, arr) => sum + arr[0] * arr[1], 0);
}

function findGears({ row, start, end }, schematic) {
  const gears = [];

  // Check top & bottom symbols
  for (let j = start; j <= end; j++) {
    if (row > 0 && schematic[row - 1][j] == '*') {
      gears.push(`${row - 1}${j}`);
    }

    if (row < schematic.length - 1 && schematic[row + 1][j] == '*') {
      gears.push(`${row + 1}${j}`);
    }
  }

  // Check left & right symbols
  for (let i = -1; i <= 1; i++) {
    if (start > 0 && schematic[row + i] && schematic[row + i][start - 1] == '*') {
      gears.push(`${row + i}${start - 1}`);
    }

    if (end < schematic[0].length - 1 && schematic[row + i] && schematic[row + i][end + 1] == '*') {
      gears.push(`${row + i}${end + 1}`);
    }
  }

  return gears;
}

module.exports = { solve, findGears };
