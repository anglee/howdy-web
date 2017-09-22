/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  let lastIndexOfWord1 = -1;
  let lastIndexOfWord2 = -1;

  let ret = Number.POSITIVE_INFINITY;
  for (let i = 0; i < words.length; ++i) {
    if (words[i] === word1) {
      if (lastIndexOfWord2 !== -1) {
        ret = Math.min(ret, i - lastIndexOfWord2);
      }
      lastIndexOfWord1 = i;
    } else if (words[i] === word2) {
      lastIndexOfWord2 = i;
      if (lastIndexOfWord1 !== -1) {
        ret = Math.min(ret, i - lastIndexOfWord1);
      }
    }
  }
  return ret;
};

export default shortestDistance;