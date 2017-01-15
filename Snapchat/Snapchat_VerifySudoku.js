import _ from 'lodash';

const One2Nine = _.range(9).map((it) => it + 1);
const sort = (A) => {
  return A.sort((a, b) => a - b);
};
const verify9Numbers = (A9) => {
  if (A9.length !== 9) {
    return false;
  }
  return _.isEqual(sort(A9.slice()), One2Nine);
};

const getColumn = (A9x9, i) => {
  return A9x9.map((row) => row[i]);
};

const getSquare = (A9x9, i, j) => {
  const ret = [];
  for (let y = i; y < i + 3; ++y) {
    for (let x = j; x < j + 3; ++x) {
      ret.push(A9x9[y][x]);
    }
  }
  return ret;
};

const sudokuVerifier = (A9x9) => {
  // A9x9 is a 2D array
  // row major, meaning A99[0] is the first row

  // verify Each row
  for (var i = 0; i < 9; ++i) {
    let row = A9x9[i];
    if (!verify9Numbers(row)) {
      return false;
    };
  }

  // verify Each column
  for (var i = 0; i < 9; ++i) {
    let column = getColumn(A9x9, i);
    if (!verify9Numbers(column)) {
      return false;
    };
  }

  // verify Each 3x3 squre
  for (var i = 0; i < 9; i += 3) {
    for (var j = 0; j < 9; j += 3) {
      let squre = getSquare(A9x9, i, j);
      if (!verify9Numbers(squre)) {
        return false;
      }
    }
  }

  return true;
};

export default sudokuVerifier;
