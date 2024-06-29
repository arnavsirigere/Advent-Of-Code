function solve(input) {
  const cubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  return input.reduce((sum, record) => {
    record = record.split(': ');
    const gameId = parseInt(record[0].match(/\d+/)[0]);
    const sets = record[1].split('; ');

    for (const set of sets) {
      for (const cube of set.split(', ')) {
        const [number, color] = cube.split(' ');
        if (parseInt(number) > cubes[color]) {
          return sum;
        }
      }
    }

    return sum + gameId;
  }, 0);
}

module.exports = { solve };
