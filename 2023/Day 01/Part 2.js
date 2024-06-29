function solve(input) {
  const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return input.reduce((sum, line) => {
    const r = new RegExp(`${digits.join('|')}|\\d`, 'g');
    const matches = [];

    while ((match = r.exec(line))) {
      if (match[0].length > 1) {
        // For instances like 'eightwo' and 'nineight'
        r.lastIndex--;
      }
      matches.push(match[0]);
    }

    const firstMatch = matches[0];
    const lastMatch = matches[matches.length - 1];

    const firstDigit = digits.includes(firstMatch) ? digits.indexOf(firstMatch) + 1 : parseInt(firstMatch);
    const lastDigit = digits.includes(lastMatch) ? digits.indexOf(lastMatch) + 1 : parseInt(lastMatch);

    return sum + firstDigit * 10 + lastDigit;
  }, 0);
}

module.exports = { solve };
