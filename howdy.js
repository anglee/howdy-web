import _ from 'lodash';

const howdy = (string) => {


  let i = 0, j = 0;
  let maxSubstring = '';
  while (i < string.length) {
    const lastPositions = {};

    // move j until the end or a duplicate occurs
    while (j < string.length && _.isUndefined(lastPositions[string[j]])) {
      lastPositions[string[j]] = j;
      j++;
    }

    // if substring[i, j) is longer than the existing longest,
    // update the longest
    if (j - i > maxSubstring.length) {
      maxSubstring = string.substring(i, j);
    }

    if (j > string.length) { // if j is at the end, we are done
      break;
    } else { // j is at a duplicate

      const dupChar = string[j];

      // move i, j to the duplicate position
      i = j = lastPositions[dupChar] + 1;
    }
  }
  return maxSubstring;
};

export default howdy;
