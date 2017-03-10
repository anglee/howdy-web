/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let co = 1;
  for (let i = digits.length - 1; i >= 0; --i) {
    digits[i] = co + digits[i];
    if (digits[i] > 9) {
      digits[i] = digits[i] - 10;
      co = 1;
    } else {
      co = 0;
    }
  }
  if (co) {
    digits.unshift(1);
  }
  return digits;
};

export default plusOne;
