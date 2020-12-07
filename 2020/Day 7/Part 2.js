function solve(input) {
  const bagRules = {};
  for (const bagRule of input) {
    const [bagColor, containedBags] = bagRule.split(' bags contain ');
    for (const bagInfo of containedBags.split(', ')) {
      if (bagInfo !== 'no other bags.') {
        const [_, bagAmount, bagType] = bagInfo.match(/(\d+)\s(.*)\sbag/);
        if (!bagRules[bagColor]) {
          bagRules[bagColor] = {};
        }
        bagRules[bagColor][bagType] = bagAmount;
      }
    }
  }
  return countBags('shiny gold', bagRules);
}

function countBags(targetBag, bagRules, count) {
  if (!bagRules[targetBag]) {
    return count;
  }
  let totalBags = 0;
  for (const bag of Object.keys(bagRules[targetBag])) {
    const bagCount = +bagRules[targetBag][bag];
    totalBags += (bagRules[bag] ? bagCount : 0) + (bagRules[bag] ? bagCount : 1) * countBags(bag, bagRules, bagCount);
  }
  return totalBags;
}

module.exports = { solve };
