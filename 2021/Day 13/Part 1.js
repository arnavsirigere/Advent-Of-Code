function solve(input) {
  const emptyLine = input.indexOf(''); // Empty line between the points and instructions in input
  const points = input.slice(0, emptyLine).map((point) => point.split(',').map(Number));
  const instruction = input.slice(emptyLine + 1)[0]; // Complete only the first fold
  // Marking positions on the transparent paper
  const w = points.reduce((w, point) => (point[0] > w ? point[0] : w), 0) + 1;
  const h = points.reduce((h, point) => (point[1] > h ? point[1] : h), 1) + 1;
  const paper = new Array(h).fill().map((_) => new Array(w).fill(0));
  points.forEach(([x, y]) => (paper[y][x] = 1));
  // Complete first fold accordng to instruction
  let [upOrLeft, crease] = instruction.split(' ')[2].split('=');
  crease = +crease;
  if (upOrLeft == 'y') {
    for (let i = 0; i < crease; i++) {
      const overlappingSegment = paper.pop();
      paper[i] = paper[i].map((position, index) => position | overlappingSegment[index]);
    }
    paper.pop();
  } else {
    for (let i = 0; i < paper.length; i++) {
      const row = paper[i];
      const overlappingSegment = row.splice(0, crease).reverse();
      row.shift();
      paper[i] = row.map((position, index) => position | overlappingSegment[index]);
    }
  }
  return paper.map((row) => row.filter(Boolean).length).reduce((acc, val) => acc + val);
}

module.exports = { solve };
