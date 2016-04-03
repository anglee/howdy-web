import _ from 'lodash';

const howdy_BruteForce = (A) => { // O(n^2)
  let ret = -1;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i]) {
        if (A[i] - A[j] > ret) {
          ret = A[i] - A[j];
        }
      }
    }
  }
  return ret;
};

const howdy = (A) => { // O(n^2)
  let ret = -1;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > min) {
      ret = Math.max(ret, A[i] - min);
    }
    else if (A[i] < min) {
      min = A[i];
    }
  }
  return ret;
};

export default howdy;
