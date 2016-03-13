import _ from 'lodash';

const howdy = (s) => {
  let i = 0;
  let maxSubstring = '';
  const lastPositions = new Map();
  // j scans from left to right
  for (let j = 0; j < s.length; j++) {
    // when j moved to a new position, make sure substring [i,j] has no duplicates
    if (lastPositions.has(s.charAt(j))) {
      i = lastPositions.get(s.charAt(j)) + 1;
    }

    // update `lastPositions`
    lastPositions.set(s.charAt(j), j);

    // update date maxSubstring if necessary
    if (j - i + 1 > maxSubstring.length) {
      maxSubstring = s.substring(i, j + 1);
    }
  }

  return maxSubstring;
};

export default howdy;
