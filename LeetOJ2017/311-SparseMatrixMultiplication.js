/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply0 = function(A, B) {
  const AB = [];
  for (let rowA = 0; rowA < A.length; rowA++) {
    const rowInAB = [];
    for (let colB = 0; colB < B[0].length; colB++) {
      let val = 0;
      for (let i = 0; i < A[0].length; i++) {
        val += A[rowA][i] * B[i][colB];
      }
      rowInAB.push(val);
    }
    AB.push(rowInAB);
  }

  return AB;
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply1 = function(A, B) {
  const w = B[0].length;
  const h = A.length;
  const l = B.length;
  const AB = Array(h).fill().map(() => Array(w).fill().map(() => 0));
  // AB[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0];
  // AB[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1];
  // AB[0][2] = A[0][0] * B[0][2] + A[0][1] * B[1][2] + A[0][2] * B[2][2];
  // AB[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] + A[1][2] * B[2][0];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      for (let i = 0; i < l; ++i) {
        AB[y][x] += A[y][i] * B[i][x];
      }
    }
  }
  return AB;
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply2 = function(A, B) { // skip if A[rowA][i] = 0
  const w = B[0].length;
  const h = A.length;
  const l = B.length;

  const AB = Array(h).fill().map(() => Array(w).fill(0));
  for (let rowA = 0; rowA < h; rowA++) {
    for (let i = 0; i < l; i++) {
      if (A[rowA][i] !== 0) {
        for (let colB = 0; colB < w; colB++) {
          if (B[i][colB] !== 0) {
            AB[rowA][colB] += A[rowA][i] * B[i][colB];
          }
        }
      }
    }
  }

  return AB;
};

//--------------------------------------------------------------------------------------------------

const dotProduct = (mapA, mapB) => {
  if (mapA.size === 0 || mapB.size === 0) {
    return 0;
  }
  let ret = 0;
  mapA.forEach((value, key) => {
    if (mapB.has(key)) {
      ret += value * mapB.get(key);
    }
  });
  return ret;
};

const createRowMaps = (A) => {
  return A.map(row => {
    const ret = new Map();
    for (let i = 0; i < row.length; ++i) {
      if (row[i] !== 0) {
        ret.set(i, row[i]);
      }
    }
    return ret;
  });
};

const createColMaps = (B) => {
  const w = B[0].length;
  const h = B.length;
  const columnMaps = Array(w).fill().map(() => new Map());
  for (let col = 0; col < w; ++col) {
    for (let i = 0; i < h; ++i) {
      if (B[i][col] !== 0) {
        columnMaps[col].set(i, B[i][col]);
      }
    }
  }
  return columnMaps;
};
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  const w = B[0].length;
  const h = A.length;
  const rowsOfA = createRowMaps(A);
  const colsOfB = createColMaps(B);
  const AB = Array(h).fill().map(() => Array(w).fill(0));
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      AB[y][x] = dotProduct(rowsOfA[y], colsOfB[x]);
    }
  }
  return AB;
};

export default multiply;