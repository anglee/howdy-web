/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
export var encode = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  const lengths = strs.map(s => s.length);
  return `${lengths.join('_')}__${strs.join('')}`;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
export var decode = function(s) {
  if (s === '') { return []; }
  const i = s.indexOf('__');
  const lengths = s.substring(0, i).split('_').map(it => parseInt(it));
  let j = i + 2;
  const ret = [];
  for (let l = 0; l < lengths.length; ++l) {
    const length = lengths[l];
    ret.push(s.substr(j, length));
    j = j + length;
  }
  return ret;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

