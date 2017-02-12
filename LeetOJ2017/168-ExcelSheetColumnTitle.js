const getChar = (() => {
  const map = new Map();
  for (let i = 1; i <= 26; ++i) {
    map.set(i, String.fromCharCode(65 + i - 1));
  }
  return (num) => map.get(num);
})();

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let buffer = [];
  let x = n;
  while (x) {
    const r = x % 26 || 26;
    buffer.push(getChar(r));
    x = (x - r) / 26;
  }
  return buffer.reverse().join('');
};

export default convertToTitle;
