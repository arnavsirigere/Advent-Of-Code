function solve(input) {
  let answeredYesCount = 0;
  for (const group of input) {
    const answers = group.split('\n');
    for (const char of answers[0]) {
      let answeredYes = true;
      for (let i = 1; i < answers.length; i++) {
        if (!answers[i].includes(char)) {
          answeredYes = false;
        }
      }
      if (answeredYes) {
        answeredYesCount++;
      }
    }
  }
  return answeredYesCount;
}

module.exports = { solve, delimiter: '\n\n' };
