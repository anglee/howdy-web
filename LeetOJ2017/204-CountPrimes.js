/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) { return 0; }
  const isPrime = new Array(n).fill(true);
  let ret = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      ++ret;
      for (let j = i + i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return ret;
};

export default countPrimes;