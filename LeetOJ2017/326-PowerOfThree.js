const set = new Set();
let x = 1;
while (x <= Number.MAX_SAFE_INTEGER) {
  set.add(x);
  x *= 3;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return set.has(n);
};

export default isPowerOfThree;