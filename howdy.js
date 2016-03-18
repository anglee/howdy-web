import _ from 'lodash';

const soluiton = (A) => {
  return _.reduce(A, (result, it) => result ^= it, 0);
};

export default soluiton;
