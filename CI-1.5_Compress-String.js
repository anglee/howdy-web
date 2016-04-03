import _ from 'lodash';

const howdy = (S) => {
  if (_.isEmpty(S)) {
    return '';
  }
  let last = S[0];
  let count = 1;
  let result = '';
  for (let i = 1; i < S.length; i++) {
    if (S[i] !== last) {
      result += last + count;
      count = 0;
    }
    last = S[i];
    count++;
  }
  result += last + count;
  return result.length > S.length ? S : result;
};

export default howdy;
