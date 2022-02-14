const legalPairs = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>'
};

function solve(input) {
  let scores = [];
  for (let line of input) {
    // Keep deleting existing and newly formed non-nested chunks, (), [], {} and <>
    const regex = /(\(\)|\[\]|\{\}|<>)/g;
    while (line.match(regex)?.length) {
      line = line.replace(regex, '');
    }
    // If only opening characters are left, corresponding closing characters will complete the line
    const closingCharacters = Object.values(legalPairs);
    if (closingCharacters.every((char) => !line.includes(char))) {
      let totalScore = 0;
      for (let i = line.length - 1; i >= 0; i--) {
        const openingCharacter = line[i];
        const closingCharacter = legalPairs[openingCharacter];
        totalScore = totalScore * 5 + closingCharacters.indexOf(closingCharacter) + 1;
      }
      scores.push(totalScore);
    }
  }
  return scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];
}

module.exports = { solve };
