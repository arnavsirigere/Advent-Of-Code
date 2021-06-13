function solve(input) {
  const data = JSON.parse(input);
  return sumOfNumbers(data);
}

function sumOfNumbers(data) {
  let sum = 0;
  data.forEach((elt) => {
    if (elt instanceof Array) {
      sum += sumOfNumbers(elt);
    } else if (elt instanceof Object && !objToArray(elt).includes('red')) {
      sum += sumOfNumbers(Object.values(elt));
    } else if (typeof elt == 'number') {
      sum += elt;
    }
  });
  return sum;
}

function objToArray(data) {
  const vals = [];
  if (data instanceof Array) {
    vals.push(...data);
  } else if (data instanceof Object) {
    vals.push(...Object.values(data));
  } else {
    vals.push(data);
  }
  return vals;
}

module.exports = { solve };
