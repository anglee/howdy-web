const array = (() => {
  const ret = [];
  for (let i = 0; i < 26; ++i) {
    ret.push(1 << i);
  }
  return ret;
})();

const encode = (string) => {
  let ret = 0;
  for (let i = 0; i < string.length; ++i) {
    ret |= array[string.charCodeAt(i) - 97];
  }
  return ret;
};

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const encoded = words.map(encode);
  let maxLength = 0;
  for (let i = 0; i < encoded.length - 1; ++i) {
    for (let j = i + 1; j < encoded.length; ++j) {
      if ((encoded[i] & encoded[j]) === 0) {
        // console.log('can work', words[i], words[j]);
        maxLength = Math.max(maxLength, words[i].length * words[j].length);
      }
    }
  }
  return maxLength;
};

export default maxProduct;