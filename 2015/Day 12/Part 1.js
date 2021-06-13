function solve(input) {
  const data = JSON.parse(input);
  return sumOfNumbers(data);
}

function sumOfNumbers(data) {
  let sum = 0;
  data.forEach((elt) => {
    if (elt instanceof Array) {
      sum += sumOfNumbers(elt);
    } else if (elt instanceof Object) {
      sum += sumOfNumbers(Object.values(elt));
    } else if (typeof elt == 'number') {
      sum += elt;
    }
  });
  return sum;
}

module.exports = { solve };
