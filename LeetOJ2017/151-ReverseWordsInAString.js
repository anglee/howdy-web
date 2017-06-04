const reverse = (word) => word.split('').reverse().join('');

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords0 = function(str) {
  const words = str.split(' ');
  return reverse(words.map(reverse).join(' '));
};

//--------------------------------------------------------------------------------------------------


const isNotEmpty = (w) => w.length > 0;
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords1 = function(str) {
  return str.split(' ').filter(isNotEmpty).reverse().join(' ');
};

//--------------------------------------------------------------------------------------------------

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords2 = function(str) {
  return (str.match(/\w+/g) || []).reverse().join(' ');
};

//--------------------------------------------------------------------------------------------------

const reverseInRange = (chars, i, j) => {
  while (i < j) {
    const temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
    i++;
    j--;
  }
};
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  const chars = (str.match(/\w+/g) || []).join(' ').split('');

  let start = 0;
  for (let i = 0; i < chars.length; ++i) {
    if (i === 0 || chars[i - 1] === ' ') {
      start = i;
    }
    if (i === chars.length - 1 || chars[i + 1] === ' ') {
      reverseInRange(chars, start, i);
    }
  }

  reverseInRange(chars, 0, chars.length - 1);
  return chars.join('');
};

export default reverseWords;
