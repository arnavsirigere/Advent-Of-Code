function solve(input) {
  const O2Rating = getRating(input);
  const CO2Rating = getRating(input, false);
  return O2Rating * CO2Rating;
}

function getRating(report, O2 = true) {
  let bitIndex = 0;
  let bitOccurences = [0, 0];
  while (report.length != 1) {
    for (const binary of report) {
      bitOccurences[+binary.charAt(bitIndex)]++;
    }
    // If we are finding O2 rating, keep all numbers that have the most occuring bit at the current bitIndex, else keep the numbers which have the least occuring bit for CO2 rating
    report = report.filter((binary) => binary.charAt(bitIndex) == Math.abs((bitOccurences[0] > bitOccurences[1] ? 0 : 1) - (O2 ? 0 : 1)));
    bitOccurences = [0, 0];
    bitIndex++;
  }
  return parseInt(report.pop(), 2);
}

module.exports = { solve };
