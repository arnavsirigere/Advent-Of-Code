function solve(input) {
  const labels = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A'];
  const types = new Array(7).fill().map(() => []);

  for (const line of input) {
    const [hand, bid] = line.split(' ');
    const labelCounts = {};
    let jCount = 0;

    for (const label of hand.split('')) {
      if (label == 'J') {
        jCount++;
      } else {
        if (!labelCounts[label]) {
          labelCounts[label] = 0;
        }
        labelCounts[label]++;
      }
    }

    const foundLabels = Object.keys(labelCounts);
    const maxCount = Object.values(labelCounts).reduce((max, val) => (val > max ? val : max), 0) + jCount;

    let type = 0;

    switch (foundLabels.length) {
      case 0:
        type = 1;
        break;

      case 1:
        type = 1;
        break;

      case 2:
        type = maxCount == 4 ? 2 : 3;
        break;

      case 3:
        type = maxCount == 3 ? 4 : 5;
        break;

      case 4:
        type = 6;
        break;

      case 5:
        type = 7;
        break;
    }

    types[type - 1].push([hand, +bid]);
  }

  let rank = input.length;
  let totalWinnings = 0;

  for (let i = 0; i < types.length; i++) {
    types[i] = types[i].sort(([handA], [handB]) => {
      let charIndex = 0;

      while (handA.charAt(charIndex) == handB.charAt(charIndex)) {
        charIndex++;
      }

      return labels.indexOf(handB.charAt(charIndex)) - labels.indexOf(handA.charAt(charIndex));
    });

    for (const [, bid] of types[i]) {
      totalWinnings += rank * bid;
      rank--;
    }
  }

  return totalWinnings;
}

module.exports = { solve };
