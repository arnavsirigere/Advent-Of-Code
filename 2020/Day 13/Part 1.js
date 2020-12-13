function solve(input) {
  let [timestamp, busIds] = input;
  timestamp = +timestamp;
  busIds = busIds.match(/\d+/g).map(Number);
  const closestTimestamps = busIds.map(busId => timestamp + busId - (timestamp % busId));
  const earliestTimestamp = Math.min(...closestTimestamps);
  return (earliestTimestamp - timestamp) * busIds[closestTimestamps.indexOf(earliestTimestamp)];
}

module.exports = { solve };
