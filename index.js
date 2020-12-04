const chalk = require('chalk');
const fs = require('fs');

const years = getDirectories('./').filter(dir => /\d+/.test(dir));

for (const year of years) {
  console.log(chalk.magenta.underline.bold(`Advent of Code ${year}`));
  const path = `./${year}/`;
  const days = getDirectories(path);
  for (const day of days) {
    console.log('  ' + chalk.blue.underline(day));
    const puzzlePath = path + day;
    const { delimiter } = require(`${puzzlePath}/Part 1`);
    const input = fs
      .readFileSync(`${puzzlePath}/input.txt`)
      .toString()
      .split(delimiter || '\n');
    for (let part of [1, 2]) {
      const solver = require(`${puzzlePath}/Part ${part}`);
      const answer = solver.solve(input);
      console.log(chalk.yellow(`    Part ${part}`) + ' : ' + chalk.green(answer));
    }
    console.log('');
  }
  console.log('');
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(file => fs.statSync(path + '/' + file).isDirectory());
}
