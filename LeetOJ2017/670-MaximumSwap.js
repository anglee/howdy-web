const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap0 = function(num) { // O(n ^ 2)
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

//--------------------------------------------------------------------------------------------------


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap1 = function(num) { // O(n)
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

//--------------------------------------------------------------------------------------------------


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap2 = function(num) { // O(n ^ 2), Redo maximumSwap0
  const digits = `${num}`.split('').map(it => parseInt(it));
  for (let i = 0; i < digits.length - 1; ++i) {
    let max = digits[digits.length - 1];
    let maxJ = digits.length - 1;
    for (let j = digits.length - 2; j >= i + 1; --j) {
      if (digits[j] > max) {
        max = digits[j];
        maxJ = j;
      }
    }
    if (max > digits[i]) {
      swap(digits, i, maxJ);
      return parseInt(digits.join(''));
    }
  }
  return num;
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {  // O(n), Redo maximumSwap1
  const digits = `${num}`.split('').map(it => parseInt(it));
  const maxToTheRight = Array(digits.length).fill(null);
  const maxToTheRightI = Array(digits.length).fill(null);
  let max = digits[digits.length - 1];
  let maxI = digits.length - 1;
  for (let i = digits.length - 2; i >= 0; --i) {
    if (digits[i] > max) {
      max = Math.max(digits[i], max);
      maxI = i;
    }
    maxToTheRight[i] = max;
    maxToTheRightI[i] = maxI;
  }
  for (let i = 0; i < digits.length - 1; ++i) {
    if (maxToTheRight[i + 1] > digits[i]) {
      swap(digits, i, maxToTheRightI[i + 1]);
      return parseInt(digits.join(''));
    }
  }
  return num;
};

export default maximumSwap;
