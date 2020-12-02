const chalk = require('chalk');
const fs = require('fs');

const totalPuzzles = getTotalPuzzles();

for (let i = 1; i <= totalPuzzles; i++) {
  const path = `./Day ${i}`;
  const input = fs.readFileSync(`${path}/input.txt`).toString().split('\n');
  console.log('  Answer to Puzzles of ' + chalk.magenta(`Day ${i} `) + ':');
  for (let part of [1, 2]) {
    const solver = require(`${path}/Part ${part}`);
    const answer = solver.solve(input);
    console.log(chalk.blue(`    Part ${part}`) + ' : ' + chalk.green(answer));
  }
  console.log('');
}

function getTotalPuzzles() {
  const directories = getDirectories('./');
  return directories.filter(dir => /Day \d+/.test(dir)).length;
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(file => fs.statSync(path + '/' + file).isDirectory());
}
