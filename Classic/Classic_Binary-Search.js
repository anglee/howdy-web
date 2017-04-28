
const binarySearch = (A, target, i = 0, j = A.length - 1) => {
  if (j < i) { // should only happen when A is empty
    return -1;
  }
  if (i === j) {
    return A[i] > target ? i : -1;
  }
  const m = Math.floor((i + j) / 2);
  if (A[m] > target) {
    return binarySearch(A, target, i, m);
  } else { // A[m] <= target
    return binarySearch(A, target, m + 1, j);
  }
};

const binarySearch0 = (A, target) => {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if (A[m] > target) {
      j = m;
    } else {
      i = m + 1;
    }
  }
  if (j > i) { // should only happen when A is empty
    return -1;
  }
  // i === j
  return A[i] > target ? i : -1;
};

export default binarySearch0;
