import _ from 'lodash';

const howdy = (string) => {
  let i = 0;
  let maxSubstring = '';
  const exists = new Set();
  // j scans from left to right
  for (let j = 0; j < string.length; j++) {
    // when j moved to a new position, make sure substring [i,j] has no duplicates
    while (exists.has(string.charAt(j))) {
      exists.delete(string.charAt(i));
      i++;
    }

    if (j - i + 1 > maxSubstring.length) {
      maxSubstring = string.substring(i, j + 1);
    }

    // make sure at the end `exists` has all and only the characters in [i,j]
    exists.add(string.charAt(j));
  }

  return maxSubstring;
};

export default howdy;
