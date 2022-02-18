const { dijkstra } = require('./Part 1.js');

function solve(input) {
  const riskGraph = input.map((row) => row.split('').map(Number));
  const w = riskGraph[0].length;
  const h = riskGraph.length;
  const scale = 5;

  for (let i = 0; i < h * scale; i++) {
    for (let j = 0; j < w * scale; j++) {
      let newRisk = riskGraph[i % h][j % w] + Math.floor(i / h) + Math.floor(j / w);
      newRisk = newRisk > 9 ? (newRisk % 10) + 1 : newRisk;
      if (!riskGraph[i]) {
        riskGraph.push([]);
      }
      riskGraph[i][j] = newRisk;
    }
  }

  return dijkstra(riskGraph, 0, 0, riskGraph.length - 1, riskGraph[0].length - 1);
}

module.exports = { solve };
