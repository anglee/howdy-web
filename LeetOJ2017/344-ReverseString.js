const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const reverse = (A) => {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    swap(A, i++, j--);
  }
  return A;
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  return reverse(s.split('')).join('');
};

export default reverseString;