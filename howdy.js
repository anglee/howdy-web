import _ from 'lodash';

const howdy = (sortedInts) => {
  const A = [-1, ...sortedInts, 100];
  const ret = [];
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i+1] - A[i] === 2) {
      ret.push(`${A[i] + 1}`);
    } else if (A[i+1] - A[i] > 2) {
      ret.push(`${A[i] + 1}->${A[i+1] - 1}`);
    }
  }
  return ret;
};

export default howdy;
