const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const getIndexOfMaxOnTheRight = (A, index) => {
    let max = -1;
    let indexOfMax = -1;
    for (let i = index + 1; i < A.length; ++i) {
      if (A[i]>= max) {
        max = A[i];
        indexOfMax = i;
      }
    }
    return indexOfMax;
  };

  const string = `${num}`;
  const digits = string.split('').map(char => parseInt(char));
  for (let i = 0; i < digits.length - 1; ++i) {
    const indexOfMaxOnTheRight = getIndexOfMaxOnTheRight(digits, i);
    if (indexOfMaxOnTheRight !== -1 && digits[indexOfMaxOnTheRight] > digits[i]) {
      swap(digits, i, indexOfMaxOnTheRight);
      break;
    }
  }
  return parseInt(digits.join(''));
};


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap1 = function(num) {
  const string = `${num}`;
  const digits = string.split('').map(char => parseInt(char));

  const indicesOfMaxOnTheRight = (() => {
    const ret = Array(digits.length);
    let max = -1;
    let indexOfMax = null;
    for (let i = digits.length - 1; i > 0; --i) {
      if (digits[i] > max) {
        max = digits[i];
        indexOfMax = i;
      }
      ret[i - 1] = indexOfMax;
    }
    return ret;
  })();

  for (let i = 0; i < digits.length - 1; ++i) {
    const indexOfMaxOnTheRight = indicesOfMaxOnTheRight[i];
    if (indexOfMaxOnTheRight !== -1 && digits[indexOfMaxOnTheRight] > digits[i]) {
      swap(digits, i, indexOfMaxOnTheRight);
      break;
    }
  }
  return parseInt(digits.join(''));
};

export default maximumSwap1;