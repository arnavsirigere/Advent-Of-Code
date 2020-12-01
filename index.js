const chalk = require('chalk');
const fs = require('fs');

const totalPuzzles = getTotalPuzzles();

for (let i = 1; i <= totalPuzzles; i++) {
  const path = `./${i}`;
  const solver = require(`${path}/solution`);
  const input = fs
    .readFileSync(`${path}/input.txt`)
    .toString()
    .split('\n')
    .map(x => +x);
  const answer = solver.solve(input);
  console.log('Answer to Puzzle ' + chalk.blue(i) + ' is ' + chalk.green(answer));
}

function getTotalPuzzles() {
  const directories = getDirectories('./');
  return +directories.filter(dir => /\d+/.test(dir)).pop();
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(file => fs.statSync(path + '/' + file).isDirectory());
}
