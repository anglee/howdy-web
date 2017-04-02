import PriorityQueue from '../lib/PriorityQueue';
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const priorityQueue = new PriorityQueue((a, b) => a.val - b.val);
  matrix.forEach((row, rowId) => {
    const val = row.shift();
    priorityQueue.add({val, rowId});
  });

  for (let j = 0; j < k - 1; ++j) {
    const {rowId} = priorityQueue.pop();
    if (matrix[rowId].length > 0) {
      priorityQueue.add({ val: matrix[rowId].shift(), rowId });
    } else {
      for (let rowId = 0; rowId < matrix.length; ++rowId) {
        if (matrix[rowId].length > 0) {
          priorityQueue.add({ val: matrix[rowId].shift(), rowId });
          break;
        }
      }
    }
  }

  const {val} = priorityQueue.pop();
  return val;
};

export default kthSmallest;