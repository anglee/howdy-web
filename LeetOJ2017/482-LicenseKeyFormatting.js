/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  const s = S.toUpperCase().split('').filter(ch => ch !== '-');
  const firstGroupSize = s.length % K || K;
  let buf = [];
  return s.reduce((ret, ch, i) => {
    buf.push(ch);
    if (i % K === firstGroupSize - 1) {
      ret.push(buf.join(''));
      buf = [];
    }
    return ret;
  }, []).join('-');
};

export default licenseKeyFormatting;