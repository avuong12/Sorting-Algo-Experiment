const log = (x) => (typeof x === 'number' ? Math.log2(x) : x);

const chart1 = c3.generate({
  bindto: '#allAlgo',
  data: {
    x: 'x',
    columns: [
      xValues(runtimeData).map(log),
      dataValues(runtimeData, 'insertionSort').map(log),
      dataValues(runtimeData, 'quicksort').map(log),
      dataValues(runtimeData, 'quicksortInsertion').map(log),
      dataValues(runtimeData, 'quicksortInsertion2').map(log),
      dataValues(runtimeData, 'mergeSort').map(log),
    ],
  },
  size: {
    height: 500,
  },
  axis: {
    x: {
      label: {
        text: 'log2(array size)',
        position: 'outer-center',
      },
    },
    y: {
      label: {
        text: 'log2(runtime, milliseconds)',
        position: 'outer-middle',
      },
    },
    tooltip: {
      format: {
        name: function (d, index) {
          return 'test' + index;
        },
      },
    },
  },
});

document.addEventListener('mouseout', (event) => {
  console.log(event.target.class === 'c3-event-rect');
});

const kCalculations = kValueData(
  insertionCalConst1,
  quicksortCalConst2,
  quicksortCalConst4
);

tabulate(kCalculations, getColumnTitles(kCalculations), 'kTable');

const data = tableData(runtimeData);

// render the tables
tabulate(data, getColumnTitles(data), 'allAlgoTable');

const chart2 = c3.generate({
  bindto: '#insertionVsQuicksort',
  data: {
    x: 'x',
    columns: [
      xValues(insertionQuicksortData).map(log),
      dataValues(insertionQuicksortData, 'insertionSort').map(log),
      dataValues(insertionQuicksortData, 'quicksort').map(log),
    ],
  },
  size: {
    height: 500,
  },
  axis: {
    x: {
      label: {
        text: 'log2(array size)',
        position: 'outer-center',
      },
    },
    y: {
      label: {
        text: 'log2(runtime, milliseconds)',
        position: 'outer-middle',
      },
    },
    tooltip: {
      format: {
        name: function (d, index) {
          return 'test' + index;
        },
      },
    },
  },
});

const insertVquickData = tableData(insertionQuicksortData);
// render the tables
tabulate(
  insertVquickData,
  getColumnTitles(insertVquickData),
  'insertionVquicksortTable'
);

const chart3 = c3.generate({
  bindto: '#quicksortInsertion',
  data: {
    x: 'x',
    columns: [
      xValues(quicksortInsertionData),
      dataValues(quicksortInsertionData, '8'),
      dataValues(quicksortInsertionData, '16'),
      dataValues(quicksortInsertionData, '32'),
      dataValues(quicksortInsertionData, '64'),
      dataValues(quicksortInsertionData, '103'),
      dataValues(quicksortInsertionData, '128'),
    ],
  },
  size: {
    height: 500,
  },
  axis: {
    x: {
      label: {
        text: 'array size',
        position: 'outer-center',
      },
      tick: {
        rotate: 75,
        multiline: false,
      },
    },
    y: {
      label: {
        text: 'runtime, milliseconds',
        position: 'outer-middle',
      },
    },
    tooltip: {
      format: {
        name: function (d, index) {
          return 'test' + index;
        },
      },
    },
  },
});

const chart4 = c3.generate({
  bindto: '#quicksort8',
  data: {
    x: 'x',
    columns: [
      xValues(quicksortData8).map(log),
      dataValues(quicksortData8, 'quicksort').map(log),
      dataValues(quicksortData8, 'quicksortInsertion').map(log),
      //dataValues(quicksortData8, 'quicksortInsertion2').map(log),
    ],
  },
  size: {
    height: 500,
    width: 600,
  },
  axis: {
    x: {
      label: {
        text: 'log2(array size)',
        position: 'outer-center',
      },
    },
    y: {
      label: {
        text: 'log2(runtime, milliseconds)',
        position: 'outer-middle',
      },
    },
    tooltip: {
      format: {
        name: function (d, index) {
          return 'test' + index;
        },
      },
    },
  },
});

const chart5 = c3.generate({
  bindto: '#quicksort103',
  data: {
    x: 'x',
    columns: [
      xValues(quicksortData103).map(log),
      dataValues(quicksortData103, 'quicksort').map(log),
      dataValues(quicksortData103, 'quicksortInsertion').map(log),
      //dataValues(quicksortData103, 'quicksortInsertion2').map(log),
    ],
  },
  size: {
    height: 500,
    width: 600,
  },
  axis: {
    x: {
      label: {
        text: 'log2(array size)',
        position: 'outer-center',
      },
    },
    y: {
      label: {
        text: 'log2(runtime, milliseconds)',
        position: 'outer-middle',
      },
    },
    tooltip: {
      format: {
        name: function (d, index) {
          return 'test' + index;
        },
      },
    },
  },
});
