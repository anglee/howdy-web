import _ from 'lodash';

const test = (S, P) => {
  if (P.length === 0) {
    return S.length === 0;
  }
  const isPatternStartWithStar = (P.length > 1 && P[1] === '*');
  if (!isPatternStartWithStar) {
    if (P[0] == S[0] || P[0] === '.') {
      return test(S.substring(1), P.substring(1));
    }
    return false;
  } else {
    if (S.length !== 0 && (P[0] == S[0] || P[0] === '.')) {
      return test(S.substring(1), P) || test(S, P.substring(2));
    } else {
      return test(S, P.substring(2));
    }
  }
};

export default test;
