/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) {
    return true;
  }
  let count = 0;
  let cloned = flowerbed.slice(0);
  for (let i = 0; i < cloned.length; ++i) {
    if (cloned[i] === 1) {
      continue;
    }
    if (
      (i === 0 || cloned[i - 1] !== 1) &&
      (i === cloned.length - 1 || cloned[i + 1] !== 1)
    ) {
      cloned[i] = 1;
      count++;
      if (count >= n) {
        return true;
      }
    }
  }
  return false;
};

export default canPlaceFlowers;