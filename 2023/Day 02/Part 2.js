function solve(input) {
  return input.reduce((sum, record) => {
    record = record.split(': ');
    const sets = record[1].split('; ');

    const minCubes = {
      green: 0,
      red: 0,
      blue: 0,
    };

    for (const set of sets) {
      for (const cube of set.split(', ')) {
        const [number, color] = cube.split(' ');
        if (parseInt(number) > minCubes[color]) {
          minCubes[color] = parseInt(number);
        }
      }
    }

    const power = Object.values(minCubes).reduce((prod, val) => prod * val);

    return sum + power;
  }, 0);
}

module.exports = { solve };
