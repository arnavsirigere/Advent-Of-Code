function solve(input) {
  /*

   0000    aaaa
  1    2  b    c
  1    2  b    c 
   3333    dddd 
  4    5  e    f
  4    5  e    f
   6666    gggg
   
  */

  // Segments to be turned on for digits 0 - 9
  const segmentPatterns = [
    [0, 1, 2, 4, 5, 6],
    [2, 5],
    [0, 2, 3, 4, 6],
    [0, 2, 3, 5, 6],
    [1, 2, 3, 5],
    [0, 1, 3, 5, 6],
    [0, 1, 3, 4, 5, 6],
    [0, 2, 5],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 5, 6]
  ];

  let outputValue = 0;
  for (const entry of input) {
    const signalWires = new Array(7).fill();
    let [signalPatterns, outputValues] = entry.split(' | ').map((_) => _.split(' '));
    signalPatterns = signalPatterns.map((pattern) => pattern.split(''));

    const signalPattern1 = signalPatterns.find((pattern) => pattern.length == 2); // Signal pattern for digit 1
    const signalPattern7 = signalPatterns.find((pattern) => pattern.length == 3); // Signal pattern for digit 7
    signalWires[0] = signalPattern7.find((s) => signalPattern1.indexOf(s) < 0); // Signal wire correspondng to 'a', only segment 7 has but 1 doesn't

    const signalPattern6 = signalPatterns.find((pattern) => pattern.length == 6 && !signalPattern1.every((wire) => pattern.includes(wire))); // Signal Pattern for digit 6, has 6 segments and shares only one with 1
    signalWires[5] = signalPattern1.find((wire) => signalPattern6.includes(wire)); // Signal wire corresponding to 'f', only segment 6 shares with 1
    signalWires[2] = signalPattern1[signalPattern1.indexOf(signalWires[5]) == 0 ? 1 : 0]; // Signal wire corresponding to 'c', found one segment of 1, this is the other one

    const signalPattern4 = signalPatterns.find((pattern) => pattern.length == 4); // Signal pattern for digit 4
    const signalPattern3 = signalPatterns.find((pattern) => pattern.length == 5 && signalPattern1.every((wire) => pattern.includes(wire))); // Signal Pattern for digit 3, only digit with 5 segments, sharing all segments with 1
    signalWires[3] = signalPattern4.find((wire) => signalPattern3.filter((wire) => signalWires.indexOf(wire) < 0).includes(wire)); // Signal wire corresponding to 'd', only segment 4 shares with 3 after removing segments a, c, f from 3
    signalWires[1] = signalPattern4.find((wire) => signalWires.indexOf(wire) < 0); // Signal wire corresponding to 'b', only segment in 4 not found yet
    signalWires[6] = signalPattern3.find((wire) => signalWires.indexOf(wire) < 0); // Signal wire corresponding to 'g', only segment in 3 not found yet

    const signalPattern8 = signalPatterns.find((pattern) => pattern.length == 7); // Signal pattern for digit 8
    signalWires[4] = signalPattern8.find((wire) => signalWires.indexOf(wire) < 0); // Signal wire corresponding to 'e', only segment in 8 not found yet

    outputValue += +outputValues.map((outputDigit) => segmentPatterns.indexOf(segmentPatterns.find((segmentPattern) => segmentPattern.length == outputDigit.length && outputDigit.split('').every((wire) => segmentPattern.includes(signalWires.indexOf(wire)))))).join('');
  }
  return outputValue;
}

module.exports = { solve };
