const runtimeData = {
  '2': {
    insertionSort: [0.00766, 0.02],
    quicksort: [0.00794, 0.021],
    quicksortInsertion: [0.00381, 0.01],
    quicksortInsertion2: [0.00429, 0.012],
    mergeSort: [0.01011, 0.026],
  },
  '4': {
    insertionSort: [0.00378, 0.005],
    quicksort: [0.00437, 0.001],
    quicksortInsertion: [0.00255, 0.001],
    quicksortInsertion2: [0.00281, 0.001],
    mergeSort: [0.0051, 0.002],
  },
  '8': {
    insertionSort: [0.00588, 0.002],
    quicksort: [0.0085, 0.001],
    quicksortInsertion: [0.00679, 0.005],
    quicksortInsertion2: [0.00542, 0.001],
    mergeSort: [0.01407, 0.006],
  },
  '16': {
    insertionSort: [0.01283, 0.002],
    quicksort: [0.01714, 0.002],
    quicksortInsertion: [0.01341, 0.003],
    quicksortInsertion2: [0.01319, 0.003],
    mergeSort: [0.02885, 0.009],
  },
  '32': {
    insertionSort: [0.07665, 0.076],
    quicksort: [0.06816, 0.108],
    quicksortInsertion: [0.01435, 0.002],
    quicksortInsertion2: [0.03553, 0.079],
    mergeSort: [0.09046, 0.029],
  },
  '64': {
    insertionSort: [0.00704, 0.006],
    quicksort: [0.04786, 0.007],
    quicksortInsertion: [0.0187, 0.006],
    quicksortInsertion2: [0.0186, 0.006],
    mergeSort: [0.24408, 0.281],
  },
  '128': {
    insertionSort: [0.01826, 0.003],
    quicksort: [0.17027, 0.241],
    quicksortInsertion: [0.02761, 0.015],
    quicksortInsertion2: [0.02224, 0.002],
    mergeSort: [0.21879, 0.305],
  },
  '256': {
    insertionSort: [0.07286, 0.049],
    quicksort: [0.05097, 0.01],
    quicksortInsertion: [0.04564, 0.003],
    quicksortInsertion2: [0.10492, 0.27],
    mergeSort: [0.65337, 1.11],
  },
  '512': {
    insertionSort: [0.18634, 0.112],
    quicksort: [0.07239, 0.004],
    quicksortInsertion: [0.88263, 3.031],
    quicksortInsertion2: [0.11581, 0.164],
    mergeSort: [1.56751, 3.148],
  },
  '1024': {
    insertionSort: [0.53858, 0.08],
    quicksort: [0.16401, 0.036],
    quicksortInsertion: [0.07403, 0.005],
    quicksortInsertion2: [0.0793, 0.006],
    mergeSort: [0.89379, 0.513],
  },
  '2048': {
    insertionSort: [2.15621, 0.517],
    quicksort: [0.25959, 0.036],
    quicksortInsertion: [0.17779, 0.027],
    quicksortInsertion2: [0.1976, 0.105],
    mergeSort: [1.46069, 0.498],
  },
  '4096': {
    insertionSort: [7.11358, 0.735],
    quicksort: [0.47089, 0.025],
    quicksortInsertion: [0.42269, 0.126],
    quicksortInsertion2: [0.39739, 0.082],
    mergeSort: [2.59504, 0.983],
  },
  '8192': {
    insertionSort: [27.17939, 1.276],
    quicksort: [1.02901, 0.126],
    quicksortInsertion: [0.97086, 0.209],
    quicksortInsertion2: [0.95347, 0.17],
    mergeSort: [5.4151, 1.56],
  },
  '16384': {
    insertionSort: [111.08137, 4.903],
    quicksort: [2.30839, 0.47],
    quicksortInsertion: [1.79031, 0.314],
    quicksortInsertion2: [2.17227, 0.809],
    mergeSort: [9.09259, 1.256],
  },
  '32768': {
    insertionSort: [429.88556, 6.587],
    quicksort: [4.64453, 0.618],
    quicksortInsertion: [3.57807, 0.356],
    quicksortInsertion2: [3.6442, 0.352],
    mergeSort: [18.25917, 0.941],
  },
  '65536': {
    insertionSort: [1731.17763, 48.568],
    quicksort: [9.98939, 1.067],
    quicksortInsertion: [8.60646, 1.415],
    quicksortInsertion2: [8.52829, 1.257],
    mergeSort: [39.32911, 2.675],
  },
  '131072': {
    insertionSort: [6878.05177, 25.979],
    quicksort: [22.53946, 3.602],
    quicksortInsertion: [16.80114, 1.473],
    quicksortInsertion2: [17.28621, 1.824],
    mergeSort: [86.14651, 8.806],
  },
  '262144': {
    insertionSort: [27776.12015, 637.905],
    quicksort: [45.82338, 5.935],
    quicksortInsertion: [36.28726, 1.483],
    quicksortInsertion2: [36.45506, 1.473],
    mergeSort: [183.01983, 8.545],
  },
  '524288': {
    insertionSort: [118551.60216, 8500.462],
    quicksort: [105.53062, 8.013],
    quicksortInsertion: [82.21765, 2.201],
    quicksortInsertion2: [85.02387, 4.3],
    mergeSort: [400.91376, 12.026],
  },
  '1048576': {
    insertionSort: [506776.94279, 48596.585],
    quicksort: [240.15679, 13.666],
    quicksortInsertion: [198.18942, 5.679],
    quicksortInsertion2: [222.29985, 62.889],
    mergeSort: [861.81089, 16.63],
  },
};

function tableData(data) {
  let tableData = [];
  let size = Object.keys(data)
    .map((x) => Number(x))
    .sort((a, b) => a - b);
  for (let i = 0; i < size.length; i++) {
    tableData.push(tableRow(data, size[i]));
  }
  return tableData;
}

function tableRow(data, key) {
  let row = {};
  row['ArraySize( n)'] = key;
  const obj = data[key];
  for (let keys in obj) {
    row[keys] = `${Number(
      data[key][keys][0].toFixed(4)
    ).toLocaleString(undefined, { maximumFractionDigits: 4 })} +/- ${
      data[key][keys][1]
    }`;
  }
  return row;
}

function xValues(data) {
  let output = [];
  for (let keys in data) {
    output.push(Number(keys));
  }
  output.sort((a, b) => a - b);
  output.unshift('x');
  return output;
}

function dataValues(data, algoName) {
  let output = [];
  let size = Object.keys(data)
    .map((x) => Number(x))
    .sort((a, b) => a - b);
  for (let i = 0; i < size.length; i++) {
    output.push(data[size[i]][algoName][0]);
  }
  output.unshift(algoName);
  return output;
}
