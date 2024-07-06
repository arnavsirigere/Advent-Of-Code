function solve(input) {
  const locationNums = [];
  const pairs = input
    .shift()
    .match(/\d+\s\d+/g)
    .map((pair) => pair.split(' ').map(Number));

  input = input.map((category) => {
    return category
      .split('\r\n')
      .slice(1)
      .map((line) => line.split(' ').map(Number));
  });

  for (const [start, length] of pairs) {
    findDestination(start, length);
  }

  return locationNums.reduce((min, num) => (num < min ? num : min));

  function findDestination(start, length, index = 0) {
    if (index == input.length) {
      locationNums.push(start);
      return;
    }

    let mapFound = false;

    for (const [destinationStart, sourceStart, len] of input[index]) {
      if (start >= sourceStart && start < sourceStart + len) {
        mapFound = true;
        const nextStart = len + sourceStart;
        const destinationNum = destinationStart + start - sourceStart;
        if (nextStart >= start + length) {
          findDestination(destinationNum, length, index + 1);
        } else {
          findDestination(destinationNum, nextStart - start, index + 1);
          findDestination(nextStart, length - nextStart + start, index);
        }
      }
    }

    if (!mapFound) {
      for (const [, sourceStart] of input[index]) {
        if (sourceStart >= start && sourceStart - start + 1 <= length) {
          findDestination(sourceStart, length - sourceStart + start, index + 1);
          findDestination(start, sourceStart - start, index + 1);
          return;
        }
      }
      findDestination(start, length, index + 1);
    }
  }
}

module.exports = { solve, delimiter: '\r\n\r\n' };
