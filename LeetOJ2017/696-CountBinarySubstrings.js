/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  if (s.length === 0) {
    return 0;
  }

  let current = s[0];
  let count = 1;
  let prevCount = 0;
  let ret = 0;
  for (let i = 1; i < s.length; ++i) {
    const char = s[i];
    if (char === current) {
      count++;
      if (count <= prevCount) {
        ret++;
      }
    } else {
      current = char;
      prevCount = count;
      count = 1;
      ret++;
    }
  }
  return ret;
};

export default countBinarySubstrings;