const map = {
  '0': '0',
  '1': '1',
  '8': '8',
  '6': '9',
  '9': '6',
};


/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  let i = 0;
  let j = num.length - 1;

  while (i <= j) {
    if (map[num[i]] !== num[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

export default isStrobogrammatic;
