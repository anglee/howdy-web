import _ from 'lodash';

const minPalin = (S) => {
  if (S.length < 2) { return 0; }

  if (S[0] === _.last(S)) {
    return minPalin(S.substring(1, S.length - 1));
  } else {
    return Math.min(minPalin(S.substring(1)),
        minPalin(S.substring(0, S.length - 1))) + 1;
  }
};

// http://www.geeksforgeeks.org/dynamic-programming-set-28-minimum-insertions-to-form-a-palindrome/

export default minPalin;
