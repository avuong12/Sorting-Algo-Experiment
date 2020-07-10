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
