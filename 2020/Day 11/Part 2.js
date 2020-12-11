const { notFloor } = require('./Part 1');

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
          } else if (occupiedSeats >= 5) {
            layout[i][j] = 'L';
          }
        }
      }
    }
  } while (!arrayEquals2D(prevLayout, layout));
  return layout.reduce((seats, row) => (seats += row.join('').replace(/[L.]/g, '').length), 0);
}

function getNeighborSeats(layout, x, y) {
  let occupiedSeats = 0;
  const w = layout[0].length;
  const h = layout.length;
  // Horizontal
  let foundRight = false;
  let foundLeft = false;
  for (let j = 1; j < Math.floor(w / 2); j++) {
    if (layout[x][y + j]) {
      const pos = layout[x][y + j];
      if (notFloor(pos)) {
        if (pos == '#' && !foundRight) {
          occupiedSeats++;
        }
        foundRight = true;
      }
    } else {
      foundRight = true;
    }
    if (layout[x][y - j]) {
      const pos = layout[x][y - j];
      if (notFloor(pos)) {
        if (pos == '#' && !foundLeft) {
          occupiedSeats++;
        }
        foundLeft = true;
      }
    } else {
      foundLeft = true;
    }
    if (foundRight && foundLeft) {
      break;
    }
  }
  // Vertical
  let foundTop = false;
  let foundBottom = false;
  for (let i = 1; i < Math.floor(h / 2); i++) {
    if (layout[x - i]) {
      const pos = layout[x - i][y];
      if (notFloor(pos)) {
        if (pos == '#' && !foundTop) {
          occupiedSeats++;
        }
        foundTop = true;
      }
    } else {
      foundTop = true;
    }
    if (layout[x + i]) {
      const pos = layout[x + i][y];
      if (notFloor(pos)) {
        if (pos == '#' && !foundBottom) {
          occupiedSeats++;
        }
        foundBottom = true;
      }
    } else {
      foundBottom = true;
    }
    if (foundTop && foundBottom) {
      break;
    }
  }
  // Diagonal
  let found = [false, false, false, false];
  for (let n = 1; n < h < w ? h : w; n++) {
    if (layout[x - n] && layout[x - n][y - n]) {
      const pos = layout[x - n][y - n];
      if (notFloor(pos)) {
        if (pos == '#' && !found[0]) {
          occupiedSeats++;
        }
        found[0] = true;
      }
    } else {
      found[0] = true;
    }
    if (layout[x + n] && layout[x + n][y + n]) {
      const pos = layout[x + n][y + n];
      if (notFloor(pos)) {
        if (pos == '#' && !found[1]) {
          occupiedSeats++;
        }
        found[1] = true;
      }
    } else {
      found[1] = true;
    }
    if (layout[x - n] && layout[x - n][y + n]) {
      const pos = layout[x - n][y + n];
      if (notFloor(pos)) {
        if (pos == '#' && !found[2]) {
          occupiedSeats++;
        }
        found[2] = true;
      }
    } else {
      found[2] = true;
    }
    if (layout[x + n] && layout[x + n][y - n]) {
      const pos = layout[x + n][y - n];
      if (notFloor(pos)) {
        if (pos == '#' && !found[3]) {
          occupiedSeats++;
        }
        found[3] = true;
      }
    } else {
      found[3] = true;
    }
    if (found.every(bool => bool)) {
      break;
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

module.exports = { solve };
