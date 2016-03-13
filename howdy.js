import _ from 'lodash';

const isPalindrome = (S, i, j) => {
  while (i < j-1) {
    if (S[i] === S[j-1]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

const howdy = (S) => {
  let longest = '';
  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      if (isPalindrome(S, i, j + 1)) {
        if (j - i + 1> longest.length) {
          longest = S.substring(i, j + 1);
        }
      }
    }
  }
  return longest;
};

export default howdy;
