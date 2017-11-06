/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const sorted = words.sort((w1, w2) => {
    if (w1.length !== w2.length) {
      return w1.length - w2.length;
    }
    return w1 > w2 ? -1 : 1;
  });

  let ret = null;
  const prefixes = new Set();
  for (let word of sorted) {
    if (word.length === 1 || prefixes.has(word.substr(0, word.length - 1))) {
      prefixes.add(word);
      ret = word;
    }
  }
  return ret;
};

export default longestWord;
