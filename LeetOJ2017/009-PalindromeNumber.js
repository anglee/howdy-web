/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome0 = function(x) {
  const s = '' + x;
  return s === s.split('').reverse().join('');
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x != 0 && x % 10 == 0)) return false;
  let sum = 0;
  while (x > sum) {
    sum = sum * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return (x === sum) || (x === Math.floor(sum / 10));
};

export default isPalindrome;