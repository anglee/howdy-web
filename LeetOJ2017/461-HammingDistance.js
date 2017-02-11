/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const binaryX = x.toString(2);
  const binaryY = y.toString(2);
  let ret = 0;
  for (let i = 0; i < binaryX.length || i < binaryY.length; ++i) {
    const digitX = i < binaryX.length ? binaryX[binaryX.length - 1 - i] : '0';
    const digitY = i < binaryY.length ? binaryY[binaryY.length - 1 - i] : '0';
    if (digitX !== digitY) {
      ++ret;
    }
  }
  return ret;
};

export default hammingDistance;
