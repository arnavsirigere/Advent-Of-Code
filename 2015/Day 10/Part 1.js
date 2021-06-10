function solve(seq) {
  return lookAndSay(seq, 40);
}

function lookAndSay(seq, n) {
  for (let i = 0; i < n; i++) {
    let newSeq = '';
    for (const matches of seq.match(/(\d)\1*/g)) {
      newSeq += matches.length + matches[0];
    }
    seq = newSeq;
  }
  return seq.length;
}

module.exports = { solve, lookAndSay, delimeter: ' ' };
