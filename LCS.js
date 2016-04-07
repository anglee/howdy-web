import _ from 'lodash';

const longerOf = (a, b) => a.length > b.length ? a : b;

const LCS = (S1, S2) => { // recursive
  if (_.isEmpty(S1) || _.isEmpty(S2)) { return ''; }

  if (S1[0] ===  S2[0]) {
    return S1[0] + LCS(S1.slice(1), S2.slice(1));
  } else {
    return longerOf(
        LCS(S1, S2.slice(1)),
        LCS(S1.slice(1), S2));
  }
};

const create2DArray = (w, h) => {
  const A = [];
  _.times(w, () => {
    const temp = [];
    _.times(h, () => {
      temp.push('');
    });
    A.push(temp);
  });
  return A;
};

const LCS2 = (S1, S2) => {
  const L = create2DArray(S1.length + 1, S2.length + 1);
  for (let j = 1; j <= S2.length; j++) {
    for (let i = 1; i <= S1.length; i++) {
      if (S1[i-1] === S2[j-1]) {
        L[i][j] = L[i - 1][j - 1] + S1[i-1];
      } else {
        L[i][j] = _.maxBy([L[i - 1][j], L[i][j - 1]], it => it.length);
      }
    }
  }

  return L[S1.length][S2.length];
};

export default LCS2;
