function solve(input) {
  return input.reduce((totalPoints, card) => {
    const winningNumbers = card.split('|')[0].match(/\d+/g).slice(1);
    const totalMatches = card
      .split('|')[1]
      .match(/\d+/g)
      .filter((num) => winningNumbers.includes(num)).length;

    return totalPoints + (totalMatches ? 2 ** (totalMatches - 1) : 0);
  }, 0);
}

module.exports = { solve };
