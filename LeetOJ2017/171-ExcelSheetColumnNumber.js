const charToNumber = (() => {
  const map = {};
  for (let i = 1; i <= 26; ++i) {
    map[String.fromCharCode(65 + i - 1)] = i;
  }
  return (char) => map[char];
})();

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let ret = 0;
  let zb = 1;

  for (let i = 0; i < s.length; ++i) {
    const char = s[s.length - 1 - i];
    ret += charToNumber(char) * zb;
    zb *= 26;
  }
  return ret;
};


export default titleToNumber;