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

const data = tableData(runtimeData);

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
      return spaceCaseFormat(column);
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

function getColumnTitles(data) {
  let columnTitles = [];
  for (let key in data[0]) {
    columnTitles.push(key);
  }
  return columnTitles;
}

// render the tables
tabulate(data, getColumnTitles(data));

function spaceCaseFormat(title) {
  let formatedTitle = title[0].toUpperCase();
  for (let i = 1; i < title.length; i++) {
    if (title[i] === title[i].toUpperCase()) {
      formatedTitle += ' ';
    }
    formatedTitle += title[i];
  }
  return formatedTitle;
}
