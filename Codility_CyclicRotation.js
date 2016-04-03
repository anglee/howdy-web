import _ from 'lodash';

const solution = (A, K) => {
  return [
    ...A.slice(A.length - K),
    ...A.slice(0, A.length - K)
  ];
};

export default solution;
