function solve(input) {
  let prevLayout = input.map(row => row.split(''));
  let layout;
  do {
    if (layout) {
      prevLayout = layout;
    }
    layout = prevLayout.map(row => [...row]);
    for (let i = 0; i < prevLayout.length; i++) {
      for (let j = 0; j < prevLayout[0].length; j++) {
        const pos = prevLayout[i][j];
        if (notFloor(pos)) {
          const occupiedSeats = getNeighborSeats(prevLayout, i, j);
          if (occupiedSeats == 0) {
            layout[i][j] = '#';
          } else if (occupiedSeats >= 4) {
            layout[i][j] = 'L';
          }
        }
      }
    }
  } while (!arrayEquals2D(prevLayout, layout));
  return layout.reduce((seats, row) => (seats += row.join('').replace(/[L.]/g, '').length), 0);
}

function getNeighborSeats(layout, i, j) {
  let occupiedSeats = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (layout[i + x] && layout[i + x][j + y] && layout[i + x][j + y] == '#' && (x !== 0 || y !== 0)) {
        occupiedSeats++;
      }
    }
  }
  return occupiedSeats;
}

function arrayEquals2D(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        return false;
      }
    }
  }
  return true;
}

const notFloor = pos => pos == '#' || pos == 'L';

module.exports = { solve, notFloor };
