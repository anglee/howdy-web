const getWH = (function () {
  let last = null;
  let lastResult = null;
  return (matrix) => {
    if (matrix === last) {
      return lastResult;
    }
    last = matrix;
    const h = matrix.length;
    const w = h === 0 ? 0 : matrix[0].length;
    const ret = {w, h};
    lastResult = ret;
    return ret;
  };
})();


const getXY = (AA, x, y) => {
  const {w, h} = getWH(AA);
  if (
    x >=0 && x < w &&
    y >=0 && y < h
  ) {
    return AA[y][x];
  }
  return 0;
};

const getMaxSquareAtXY = (AA, x, y) => {
  let w = 0;
  if (getXY(AA, x, y) === 0) {
    return {x, y, w}
  }
  w = 1;
  while (true) {
    for (let i = 0; i < w; ++i) {
      // console.log(`w = ${w}, i = ${i}, x=${x + w - 1}, y=${y + i}, val=${getXY(AA, x + w - 1, y + i)}, ${getXY(AA, x + w - 1, y + i) === 0}`);
      if (getXY(AA, x + w - 1, y + i) === 0) {
        return {x, y, w: w - 1};
      }
    }
    for (let i = 0; i < w-1; ++i) {
      // console.log(`w = ${w}, i = ${i}, x=${x + i}, y=${y + w - 1}, val=${getXY(AA, x + i, y + w - 1)}, ${getXY(AA, x + i, y + w - 1) === 0}`);
      if (getXY(AA, x + i, y + w - 1) === 0) {
        return {x, y, w: w - 1};
      }
    }
    ++w;
  }
};


const maxBy = (A, func) => {
  let ret = null;
  let max = null;
  A.forEach((a) => {
    const val = func(a);
    if (val > max) {
      ret = a;
      max = val;
    }
  });
  return ret;
};
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const {w, h} = getWH(matrix);
  if (h === 0) { return 0; }
  const squares = [];
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      squares.push(getMaxSquareAtXY(matrix, x, y));
    }
  }

  const maxSq = maxBy(squares, sq => sq.w);
  if (maxSq === null) {
    return 0;
  }
  // console.log(maxSq);
  const {w: width} = maxSq;
  const area = width * width;
  return area;
};

export default maximalSquare;