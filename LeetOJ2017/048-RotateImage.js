const getWH = (AA) => {
  const h = AA.length;
  const w = h === 0 ? 0 : AA[0].length;
  return {w, h};
};
const createAA = (w, h) => Array(h).fill().map(
  () => Array(w).fill()
);
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate0 = function(matrix) {
  const {w, h} = getWH(matrix);
  const ret = createAA(h, w);
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      ret[x][h - y - 1] = matrix[y][x];
    }
  }

  //return ret;
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      matrix[y][x] = ret[y][x];
    }
  }
};

//--------------------------------------------------------------------------------------------------

const transform = ({x, y}, w) => ({x: w - y - 1, y: x});
const swap = (matrix, w, l, i) => {
  const pos1 = {x: l + i, y: l};
  const pos2 = transform(pos1, w);
  const pos3 = transform(pos2, w);
  const pos4 = transform(pos3, w);

  const temp = matrix[pos1.y][pos1.x];
  matrix[pos1.y][pos1.x] = matrix[pos4.y][pos4.x];
  matrix[pos4.y][pos4.x] = matrix[pos3.y][pos3.x];
  matrix[pos3.y][pos3.x] = matrix[pos2.y][pos2.x];
  matrix[pos2.y][pos2.x] = temp;
};

const rotateLayer = (matrix, w, l) => {
  for (let i = 0; i < w - 2 * l - 1; ++i) {
    swap(matrix, w, l, i);
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const w = matrix.length;
  const layerCount = Math.floor(w / 2);
  for (let l = 0; l < layerCount; ++l) {
    rotateLayer(matrix, w, l);
  }
};
export default rotate;