import _ from 'lodash';

const solution = (N, A) => {
  const ret = _.range(N).map(it => 0);
  let max = 0;
  A.forEach((a) => {
    if (a < N) {
      ret[a - 1]++; // -1 because it is 1-based
      if (ret[a - 1] > max) {
        max = ret[a - 1];
      }
    } else {
      ret.forEach((it, i) => {
        ret[i] = max;
      });
    }
  });
  return ret;
};

export default solution;
