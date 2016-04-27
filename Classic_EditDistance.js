import _ from 'lodash';

const editDist = (s1, s2) => {
  if (_.isEmpty(s1)) {
    return s2.length;
  }
  if (_.isEmpty(s2)) {
    return s1.length;
  }
  if (s1[0] === s2[0]) {
    return editDist(s1.substr(1), s2.substr(1));
  } else {
    return Math.min(
      editDist(s1.substr(1), s2),
      editDist(s1, s2.substr(1)),
      editDist(s1.substr(1), s2.substr(1))
    ) + 1;
  }
};

const initBuffer = (h, w) => {
  return _.range(h).map(() => _.range(w).map(() => 0));
};
const editDistDP = (s1, s2) => { // solve with dynamic programming
  const buf = initBuffer(s1.length, s2.length);
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        buf[i][j] = i > 0 && j > 0 ? buf[i - 1][j - 1] : 0;
      } else {
        buf[i][j] = Math.min(
          i > 0 ? buf[i - 1][j] : 0,
          j > 0 ? buf[i][j - 1] : 0,
          i > 0 && j > 0 ? buf[i - 1][j - 1] : 0) + 1;
      }
    }
  }
  return buf[s1.length - 1][s2.length - 1];
};

//export default editDist;
export default editDistDP;
