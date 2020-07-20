function insertionCal(constant, startSize, endSize) {
  let row = {};
  while (startSize <= endSize) {
    row[startSize] = startSize * startSize * constant;
    startSize = startSize * 2;
  }
  return row;
}

console.log(insertionCal(1, 4, 64));

function quicksortCal(constant, startSize, endSize) {
  let row = {};
  while (startSize <= endSize) {
    row[startSize] = constant * startSize * Math.log2(startSize);
    startSize = startSize * 2;
  }
  return row;
}
console.log(quicksortCal(4, 4, 64));
