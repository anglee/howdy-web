/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  for (let i = 0; i < bit.length; ++i) {
    if (i === bit.length - 1) {
      return true;
    }
    if (bits[i] === 1) {
      ++i;
    }
  }
  return false;
};

export default isOneBitCharacter;