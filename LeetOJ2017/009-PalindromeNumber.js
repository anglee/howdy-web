/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = '' + x;
  return s === s.split('').reverse().join('');
};

export default isPalindrome;