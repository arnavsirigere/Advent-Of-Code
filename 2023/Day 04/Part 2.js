function solve(input) {
  const cards = new Array(input.length).fill(1);
  const points = input.map((card) => {
    const winningNumbers = card.split('|')[0].match(/\d+/g).slice(1);
    return card
      .split('|')[1]
      .match(/\d+/g)
      .filter((num) => winningNumbers.includes(num)).length;
  });

  for (let i = 0; i < points.length; i++) {
    for (let j = 1; j <= points[i]; j++) {
      cards[i + j] += cards[i];
    }
  }

  return cards.reduce((sum, count) => sum + count, 0);
}

module.exports = { solve };
