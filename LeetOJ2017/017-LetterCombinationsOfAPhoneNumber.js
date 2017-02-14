
const map = new Map();
map.set('2', ['a', 'b', 'c']);
map.set('3', ['d', 'e', 'f']);
map.set('4', ['g', 'h', 'i']);
map.set('5', ['j', 'k', 'l']);
map.set('6', ['m', 'n', 'o']);
map.set('7', ['p', 'q', 'r', 's']);
map.set('8', ['t', 'u', 'v']);
map.set('9', ['w', 'x', 'y', 'z']);

const comb = (prefix, ds, ret) => {
  if (ds.length === 0) {
    ret.push(prefix);
    return;
  }
  const [head, ...tail] = ds;
  map.get(head).forEach(ch => { comb(prefix + ch, tail, ret) });
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  const ret = [];
  comb('', digits.split(''), ret);
  return ret;
};

export default letterCombinations;