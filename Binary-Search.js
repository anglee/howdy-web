import _ from 'lodash';

const binarySearchI = (A, i, j, target) => {
  if (j < i) {
    return -1;
  }
  if (i === j) {
    return A[i] > target ? i : -1;
  }
  const m = Math.floor((i + j) / 2);
  if (A[m] > target) {
    return binarySearchI(A, i, m, target);
  } else { // A[m] <= target
    return binarySearchI(A, m + 1, j, target);
  }
};

const binarySearch = (A, target) => {
  return binarySearchI(A, 0, A.length - 1, target);
};

export default binarySearch;
