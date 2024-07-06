function solve(input) {
  let numbers = input[0].match(/\d+/g).map(Number);

  for (let i = 1; i < input.length; i++) {
    numbers = numbers.map((num) => {
      for (const line of input[i].split('\r\n').slice(1)) {
        const [destinationStart, sourceStart, len] = line.split(' ').map(Number);
        if (num >= sourceStart && num < sourceStart + len) {
          return destinationStart + num - sourceStart;
        }
      }
      return num;
    });
  }

  return numbers.reduce((min, num) => (num < min ? num : min));
}

module.exports = { solve, delimiter: '\r\n\r\n' };
