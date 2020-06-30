const log = (x) => (typeof x === 'number' ? Math.log2(x) : x);

const chart = c3.generate({
  data: {
    x: 'x',
    columns: [
      xValues(runtimeData).map(log),
      dataValues(runtimeData, 'insertionSort').map(log),
      dataValues(runtimeData, 'quickSort').map(log),
      dataValues(runtimeData, 'quickSortInsertion').map(log),
      dataValues(runtimeData, 'quickSortInsertion2').map(log),
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

const data = tableData(runtimeData);
console.log(data);

function tabulate(data, columns) {
  const table = d3.select('body').append('table');
  const thead = table.append('thead');
  const tbody = table.append('tbody');

  // append the header row
  thead
    .append('tr')
    .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .text(function (column) {
      return column;
    });

  // create a row for each object in the data
  const rows = tbody.selectAll('tr').data(data).enter().append('tr');

  // create a cell in each row for each column
  const cells = rows
    .selectAll('td')
    .data(function (row) {
      return columns.map(function (column) {
        return { column: column, value: row[column] };
      });
    })
    .enter()
    .append('td')
    .text(function (d) {
      return d.value;
    });

  return table;
}

function getColumns(data) {
  let columnTiltes = [];
  for (let keys in data[0]) {
    columnTiltes.push(keys);
  }
  return columnTiltes;
}

// render the tables
tabulate(data, getColumns(data));
