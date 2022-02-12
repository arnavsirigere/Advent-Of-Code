function solve(input) {
  const segmentNumbers = [2, 3, 4, 7]; // Number of segments for the digits 1, 7, 4, 8 which have unique signal patterns
  const outputValues = input.map((entry) => entry.split(' | ').pop());
  return outputValues.map((outputValue) => outputValue.split(' ').filter((outputDigit) => segmentNumbers.includes(outputDigit.length)).length).reduce((acc, val) => acc + val);
}

module.exports = { solve };
