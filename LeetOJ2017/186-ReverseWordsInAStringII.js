const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const reverseInRange = (A, i, j) => {
  let ii = i;
  let jj = j;
  while (ii < jj) {
    swap(A, ii++, jj--);
  }
};

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
  let start = 0;
  let end = 0;
  while (start < str.length) {
    // place start and end at a word
    while (end < str.length - 1 && str[end + 1] !== ' ') {
      ++end;
    }
    // reverse the word
    // console.log(`reversing ${str.slice(start, end + 1).join('')}`);
    if (start !== end) {
      reverseInRange(str, start, end);
    }

    // reset start and end
    start = end + 2;
    end = start;
  }

  // reverse the entire array
  reverseInRange(str, 0, str.length - 1);
};

export default reverseWords;
