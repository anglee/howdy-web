import _ from 'lodash';

const solution = (A) => {
  const s = new Set();
  _.forEach(A, (it) => {
    s.add(Math.abs(it));
  });
  return s.size;
};

export default solution;
