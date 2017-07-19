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

//--------------------------------------------------------------------------------------------------

const LCS2 = (S1, S2) => { // non-recursive
  const L = Array(S1.length + 1).fill().map(() => Array(S2.length + 1).fill(''));
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

//--------------------------------------------------------------------------------------------------


const LCS3 = (S1, S2) => { // same as LCS2, but use a bit less space
  let buf = _.range(S1.length + 1).map(it => '');
  for (let j = 1; j <= S2.length; j++) {
    const newBuf = buf.slice();
    for (let i = 1; i <= S1.length; i++) {
      if (S1[i-1] === S2[j-1]) {
        newBuf[i] = buf[i-1] + S1[i-1];
      } else if (newBuf[i-1].length > buf[i].length) {
        newBuf[i] = newBuf[i-1];
      } else {
        newBuf[i] = buf[i];
      }
    }
    buf = newBuf;
  }

  return buf[S1.length];
};

export default LCS3;
