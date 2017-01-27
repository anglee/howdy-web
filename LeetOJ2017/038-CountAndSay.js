const readIt = (s) => {
  let lastCh = null;
  let count = 0;
  let ret = '';
  for (let ch of s) {
    if (ch === lastCh) {
      count++;
    } else {
      if (lastCh !== null) {
        ret += `${count}${lastCh}`;
      }
      count = 1;
    }
    lastCh = ch;
  }
  if (lastCh !== null) {
    ret += `${count}${lastCh}`;
  }
  return ret;
};
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let current = '1';
  for (let i = 1; i < n; ++i) {
    current = readIt(current);
  }
  return current;
};

export default countAndSay;
