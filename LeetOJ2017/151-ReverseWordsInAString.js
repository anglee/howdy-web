const reverse = (word) => word.split('').reverse().join('');

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords0 = function(str) {
  const words = str.split(' ');
  return reverse(words.map(reverse).join(' '));
};

const isNotEmpty = (w) => w.length > 0;
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  return str.split(' ').filter(isNotEmpty).reverse().join(' ');
};

export default reverseWords;