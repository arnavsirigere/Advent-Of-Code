function solve(input) {
  const riskGraph = input.map((row) => row.split('').map(Number));
  return dijkstra(riskGraph, 0, 0, riskGraph.length - 1, riskGraph[0].length - 1);
}

const dijkstra = (riskGraph, startI, startJ, endI, endJ) => {
  // The 2-dimensional array of risk levels is our graph.
  // We treat each risk level in the input as a node. It forms edges with all adjacent risk levels.
  // We use the index as a unique identifier for each node or risk level, we can image flattening out the graph into an array to get the index.
  // For the distance, we simply add the risk levels of all nodes in the path
  // In the priority queue, each element is an object storing the node's individual index and the total distance of the path we calculated yet.

  const w = riskGraph[0].length;
  const h = riskGraph.length;

  const getIndex = (i, j) => i * w + j;

  const getNeighbors = (index) => {
    const i = Math.floor(index / h);
    const j = index % w;
    return [
      [i - 1, j],
      [i, j - 1],
      [i + 1, j],
      [i, j + 1]
    ].filter(([neighborI, neighborJ]) => riskGraph[neighborI] && riskGraph[neighborI][neighborJ]);
  };

  const startIndex = getIndex(startI, startJ);
  const visited = new Set([startIndex]);
  const priorityQueue = [{ index: startIndex, distance: 0 }];

  while (true) {
    const current = priorityQueue[0];
    const neighbors = getNeighbors(current.index); // Standard i,j indices into the two-dimensional array for all neighbors/adjacent risk levels
    for (const [neighborI, neighborJ] of neighbors) {
      const neighborIndex = getIndex(neighborI, neighborJ);
      if (!visited.has(neighborIndex)) {
        visited.add(neighborIndex);

        const risk = riskGraph[neighborI][neighborJ];
        const newDistance = current.distance + risk;

        // Return the total distance of the path if the neighbor is the the target node
        if (neighborIndex == getIndex(endI, endJ)) {
          return newDistance;
        }

        // Add the neighbor node to our priority queue
        priorityQueue.push({ index: neighborIndex, distance: newDistance });
      }
    }
    // Update the priority queue and visit the next closest node, which will be the first node in the priority queue after we sort it
    priorityQueue.sort((a, b) => a.distance - b.distance);
    priorityQueue.shift();
  }
};

module.exports = { solve, dijkstra };
