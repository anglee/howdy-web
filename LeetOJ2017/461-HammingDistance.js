/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance0 = function(x, y) {
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

//------------------------------------------------------------------------------------------

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

  let ix = x;
  let iy = y;

  let ret = 0;
  while (ix > 0 && iy > 0) {
    if (ix % 2 !== iy % 2) { ret += 1; }
    ix = Math.floor(ix / 2);
    iy = Math.floor(iy / 2);
  }

  while (ix > 0) {
    if (ix % 2 !== 0) { ret += 1; }
    ix = Math.floor(ix / 2);
  }
  while (iy > 0) {
    if (iy % 2 !== 0) { ret += 1; }
    iy = Math.floor(iy / 2);
  }

  return ret;
};

export default hammingDistance;
