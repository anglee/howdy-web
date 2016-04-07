import _ from 'lodash';

const tieRopes = (K, A) => {
  let sum = 0;
  let count = 0;
  A.forEach((it) => {
    sum += it;
    if (sum >= K) {
      sum = 0;
      count++;
    }
  });
  return count;
};

export default tieRopes;
