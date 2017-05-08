/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const allWordsSet = new Set(wordList);
  const visitedWords = new Set([beginWord]);

  const memoize = (f) => {
    const retMap = new Map();
    return (word) => {
      if (retMap.has(word)) {
        return retMap.get(word);
      }
      const ret = f(word);
      retMap.set(word, ret);
      return ret;
    }
  };

  const getNeighbors = memoize((word) => {
    const ret = [];
    for (let pos = 0; pos < word.length; ++pos) {
      const prefix = word.substr(0, pos);
      const suffix = word.substr(pos + 1);
      for (let ch = 97; ch < 97 + 26; ++ch) {
        const neighbor = `${prefix}${String.fromCharCode(ch)}${suffix}`;
        if (allWordsSet.has(neighbor)) {
          ret.push(neighbor);
        }
      }
    }
    return ret;
  });

  const getUnvisitedNeighbors = (word) => (
    getNeighbors(word).filter(neighbor => !visitedWords.has(neighbor))
  );

  const backtrack = (node) => {
    const ret = [];
    let n = node;
    while (n !== null) {
      ret.unshift(n.word);
      n = n.parent;
    }
    return ret;
  };

  const root = { word: beginWord, parent: null, level: 0 };
  const queue = [root];
  const ret = [];
  let endWordLevel = null;
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.word === endWord) {
      if (endWordLevel === null || node.level === endWordLevel) { // when revisit, think why need to check node.level === endWordLevel, ie. when will node.level > endWordLevel
        endWordLevel = node.level;
        ret.push(backtrack(node));
      }
    } else {
      visitedWords.add(node.word);
      if (endWordLevel === null || node.level < endWordLevel) {
        const unvisitedNeighborWords = getUnvisitedNeighbors(node.word);
        queue.push(...unvisitedNeighborWords.map(
          w => ({ word: w, parent: node, level: node.level + 1 })
        ));
      }
    }
  }
  return ret;
};

export default findLadders;