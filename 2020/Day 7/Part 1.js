function solve(input) {
  const bagRules = {};
  for (const bagRule of input) {
    const [bagColor, containedBags] = bagRule.split(' bags contain ');
    for (const bagInfo of containedBags.split(', ')) {
      if (bagInfo !== 'no other bags.') {
        const [_, bag] = bagInfo.match(/\d+\s(.*)\sbag/);
        if (!bagRules[bagColor]) {
          bagRules[bagColor] = [];
        }
        bagRules[bagColor].push(bag);
      }
    }
  }
  let totalBags = 0;
  const bags = Object.keys(bagRules);
  for (const bag of bags) {
    if (containsBag(bagRules[bag], 'shiny gold', bagRules)) {
      totalBags++;
    }
  }
  return totalBags;
}

function containsBag(bags, goalBag, bagRules) {
  if (bags.includes(goalBag)) {
    return true;
  }
  const newBags = [];
  for (const bag of bags) {
    if (bagRules[bag]) {
      newBags.push(...bagRules[bag]);
    }
  }
  if (newBags.length == 0) {
    return false;
  } else {
    return containsBag(newBags, goalBag, bagRules);
  }
}

module.exports = { solve };
