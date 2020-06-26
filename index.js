const log = (x) => (typeof x === 'number' ? Math.log2(x) : x);

var chart = c3.generate({
  data: {
    x: 'x',
    columns: [
      xValues(runtimeData).map(log),
      dataValues(runtimeData, 'insertionSort').map(log),
      dataValues(runtimeData, 'quickSort').map(log),
      dataValues(runtimeData, 'quickSortCombo').map(log),
      dataValues(runtimeData, 'quickSortCombo2').map(log),
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
  },
});
