const totalRows = 128;
const totalCols = 8;
const seatIds = [];

function solve(input) {
  for (const seat of input) {
    const rowChars = seat.substr(0, 7);
    const colChars = seat.substr(7, 10);
    let rowRange = { min: 0, max: totalRows - 1 };
    let colRange = { min: 0, max: totalCols - 1 };
    for (const char of rowChars) {
      rowRange = newRange(rowRange, char, 'row');
    }
    for (const char of colChars) {
      colRange = newRange(colRange, char, 'col');
    }
    const row = rowRange.min;
    const col = colRange.min;
    const seatId = calcSeatId(row, col);
    seatIds.push(seatId);
  }
  return Math.max(...seatIds);
}

function newRange(range, char, seatPos) {
  const midPoint = Math.floor((range.min + range.max) / 2);
  const lowerHalf = { min: range.min, max: midPoint };
  const upperHalf = { min: midPoint + 1, max: range.max };
  const lookup = { row: ['F', 'B'], col: ['L', 'R'] };
  return lookup[seatPos].indexOf(char) == 0 ? lowerHalf : upperHalf;
}

const calcSeatId = (row, col) => row * 8 + col;

module.exports = { solve, seatIds };
