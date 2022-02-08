const chalk = require('chalk');
const fs = require('fs');

let [day, year] = process.argv.slice(2, 4);
if (day && year) {
  // Specific Puzzle
  console.log(chalk.magenta.underline.bold(`Advent of Code ${year}`));
  printPuzzle(`Day ${day}`, year);
} else {
  // All solved puzzles
  const years = getDirectories('./').filter((dir) => /\d+/.test(dir));
  for (let year of years) {
    const days = getDirectories(`./${year}/`);
    console.log(chalk.magenta.underline.bold(`Advent of Code ${year}`));
    for (let day of days) {
      printPuzzle(day, year);
    }
  }
}

function printPuzzle(day, year) {
  console.log('  ' + chalk.blue.underline(`${day}`));
  const puzzlePath = `./${year}/${day}`;
  const { delimiter } = require(`${puzzlePath}/Part 1`);
  const input = fs
    .readFileSync(`${puzzlePath}/input.txt`)
    .toString()
    .split(delimiter || '\r\n');
  for (let part of [1, 2]) {
    const solver = require(`${puzzlePath}/Part ${part}`);
    const answer = solver.solve(input.length == 1 ? input[0] : input);
    console.log(chalk.yellow(`    Part ${part}`) + ' : ' + chalk.green(answer));
  }
  console.log('');
}

function getDirectories(path) {
  return fs.readdirSync(path).filter((file) => fs.statSync(path + '/' + file).isDirectory());
}
