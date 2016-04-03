import _ from 'lodash';

const howdy = (A) => {
  let i = 0;
  let j = A.length - 1;

  while (i < j) {
    if (A[i] < A[j]) {
      return A[i];
    } else if (A[i] === A[j]) {
      i++;
    } else { // A[i] > A[j], e.g. [3, 1, 2], [2, 3, 1], [2, 1]
      const m = Math.floor((i + j) / 2);
      if (m === i) {
        return Math.min(A[i], A[j]);
      }

      if (A[m] < A[i]) {
        j = m;
      } else if (A[m] === A[i]) {
        i = m;
      } else { // A[m] > A[i]
        i = m;
      }
    }
  }
  return A[i];
};

export default howdy;
