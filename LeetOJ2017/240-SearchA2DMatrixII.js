import PriorityQueue from '../lib/PriorityQueue';

const binarySearch = (sortedA, target) => {
  let i = 0;
  let j = sortedA.length - 1;

  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (sortedA[m] === target) {
      return true;
    }
    if (sortedA[m] > target) {
      j = m - 1;
    } else {
      i = m + 1;
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix0 = function(matrix, target) {
  if (matrix.length === 0) { return false; }
  const w = matrix[0].length;
  const rows = matrix;
  for (let row of rows) {
    if (row[0] > target || row[w - 1] < target) {
      continue;
    }
    if (binarySearch(row, target)) {
      return true;
    }
  }
  return false;
};

//--------------------------------------------------------------------------------------------------

const findFirstQualifiedRowIndex = (matrix, target) => {
  // the first qualified row is the first row that has last element >= target
  let i = 0;
  let j = matrix.length - 1;
  const w = matrix[0].length;
  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if (matrix[m][w - 1] < target) {
      i = m + 1;
    } else {
      j = m;
    }
  }
  return i;
};

const findLastQualifiedRowIndex = (matrix, target) => {
  // the first qualified row is the last row that has first element <= target
  let i = 0;
  let j = matrix.length - 1;
  while (i < j) {
    const m = Math.ceil((i + j) / 2);
    if (matrix[m][0] <= target) {
      i = m;
    } else {
      j = m - 1;
    }
  }
  return i;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function(matrix, target) {
  const firstQualifiedRowIndex = findFirstQualifiedRowIndex(matrix, target);
  const lastQualifiedRowIndex = findLastQualifiedRowIndex(matrix, target);
  for (let index = firstQualifiedRowIndex; index < lastQualifiedRowIndex; ++index) {
    if (binarySearch(matrix[index], target)) {
      return true;
    }
  }
  return false;
};

// ===============================================================================

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) { // similar to merge sort
  if (matrix.length === 0) { return false; }
  const q = new PriorityQueue((a, b) => a.val - b.val);
  const rows = matrix;
  rows.forEach((row, i) => {
    q.add({
      val: row.shift(),
      rowId: i,
    });
  });

  while (!q.isEmpty()) {
    // console.log(q.toArray());
    const {val, rowId} = q.pop();
    if (val === target) {
      return true;
    }
    if (val > target) {
      return false;
    }
    if (rows[rowId].length > 0) {
      q.add({
        val: rows[rowId].shift(),
        rowId
      });
    }
  }
};

export default searchMatrix;