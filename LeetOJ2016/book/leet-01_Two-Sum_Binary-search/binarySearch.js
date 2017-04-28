import _ from 'lodash';
// 1,2,3,4,5 (4)
const binarySearch0 = (A, target, l = 0, r = A.length - 1) => {
  if (r < l) {
    return -1;
  }
  const m = Math.floor((l + r) / 2);
  if (A[m] === target) {
    return m;
  }
  if (A[m] > target) {
    return binarySearch0(A, target, l, m - 1);
  } else { // A[m] < target
    return binarySearch0(A, target, m + 1, r);
  }
};

const binarySearch = (A, target) => {
  let i = 0;
  let j = A.length - 1;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (A[m] === target) {
      return m;
    }
    if (A[m] > target) {
      j = m - 1;
    } else {
      i = m + 1;
    }
  }
  return -1;
};


export default binarySearch;