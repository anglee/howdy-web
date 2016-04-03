import _ from 'lodash';

const helper = (A, i, j) => {
  if (A[j] >= A[i]) {
    return A[i];
  }

  const m = Math.floor((i + j) / 2);

  if (A[m] > A[j]) {
    return helper(A, m + 1, j);
  } else {
    return helper(A, i, m);
  }
};
const howdy = (A) => {
  return helper(A, 0, A.length - 1);
};

export default howdy;
