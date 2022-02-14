const charScores = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137
};

function solve(input) {
  let errorScore = 0;
  for (let line of input) {
    // Keep deleting existing and newly formed non-nested chunks, (), [], {} and <>
    const regex = /(\(\)|\[\]|\{\}|<>)/g;
    while (line.match(regex)?.length) {
      line = line.replace(regex, '');
    }
    // First occurence of a closing character is the illegal character, if it exists, the line is corrupted and we add it's error score
    const closingCharacters = Object.keys(charScores);
    if ((illegalCharacter = line.split('').find((char) => closingCharacters.includes(char)))) {
      errorScore += charScores[illegalCharacter];
    }
  }
  return errorScore;
}

module.exports = { solve };
