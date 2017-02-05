const getNeighbors = (word, wordSet, excludes) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const ret = [];
  for (let i = 0; i < word.length; ++i) {
    for (let j = 0; j < letters.length; ++j) {
      const char = letters[j];
      if (char !== word[i]) {
        const w = word.substring(0, i) + char + word.substr(i+1);
        if (wordSet.has(w) &&!excludes.has(w)) {
          ret.push(w);
        }
      }
    }
  }
  return ret;
};

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  const visited = new Set([beginWord]);
  const q = [[beginWord, 1]];
  while (q.length > 0) {
    const [w, len] = q.shift();
    if (w === endWord) {
      return len;
    } else {
      const neighbors = getNeighbors(w, wordSet, visited);
      neighbors.forEach((it) => visited.add(it));
      q.push(...neighbors.map(it => [it, len + 1]));
    }
  }
  return 0;
};

export default ladderLength;
