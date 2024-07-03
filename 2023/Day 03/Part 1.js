function solve(input) {
  const schematic = input.map((row) => row.split(''));
  let sum = 0;

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

        if (isPartNumber(numPos, schematic)) {
          sum += parseInt(num.join(''));
        }
      }
    }
  }

  return sum;
}

function isPartNumber({ row, start, end }, schematic) {
  // Check top & bottom symbols
  for (let j = start; j <= end; j++) {
    if (row > 0 && !/(\d|\.)/.test(schematic[row - 1][j])) {
      return true;
    }

    if (row < schematic.length - 1 && !/(\d|\.)/.test(schematic[row + 1][j])) {
      return true;
    }
  }

  // Check left & right symbols
  for (let i = -1; i <= 1; i++) {
    if (start > 0 && schematic[row + i] && !/(\d|\.)/.test(schematic[row + i][start - 1])) {
      return true;
    }

    if (end < schematic[0].length - 1 && schematic[row + i] && !/(\d|\.)/.test(schematic[row + i][end + 1])) {
      return true;
    }
  }

  return false;
}

module.exports = { solve, isPartNumber };
