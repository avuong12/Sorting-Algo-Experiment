function insertionCal(constant, startSize, endSize) {
  let row = {};
  while (startSize <= endSize) {
    row[startSize] = startSize * startSize * constant;
    startSize = startSize * 2;
  }
  return row;
}

function quicksortCal(constant, startSize, endSize) {
  let row = {};
  while (startSize <= endSize) {
    row[startSize] = constant * startSize * Math.log2(startSize);
    startSize = startSize * 2;
  }
  return row;
}

const insertionCalConst1 = insertionCal(1, 4, 32);
const quicksortCalConst2 = quicksortCal(2, 4, 32);
const quicksortCalConst4 = quicksortCal(4, 4, 32);

// Make k data.
function kValueData(insertionObj, quicksortObj2, quicksortObj4) {
  const kData = [];
  const size = Object.keys(insertionObj);
  for (let i = 0; i < size.length; i++) {
    let entry = {};
    entry['Array Size (n)'] = size[i];
    entry['insertion Sort, C1 = 1'] = insertionObj[size[i]];
    entry['quicksort, C2 = 2'] = quicksortObj2[size[i]];
    entry['quicksort, C2 = 4'] = quicksortObj4[size[i]];
    kData.push(entry);
  }
  return kData;
}

function kValueDataGraph(insertionObj, quicksortObj2, quicksortObj4) {
  const kData = {};
  for (let keys in insertionObj) {
    kData[keys] = {};
    kData[keys]['Insertion Sort'] = insertionObj[keys];
    kData[keys]['Quicksort, C2 = 2'] = quicksortObj2[keys];
    kData[keys]['Quicksort, C2 = 4'] = quicksortObj4[keys];
  }
  return kData;
}

console.log(
  kValueDataGraph(insertionCalConst1, quicksortCalConst2, quicksortCalConst4)
);
