/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */

const getNeighbors = (w, ws, excludes) => {
  const ret = [];
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < w.length; ++i) {
    for (var c = 0; c < 26; ++c) {
      var ch = chars[c];
      if (ch !== w[i]) {
        var word = w.substring(0, i) + ch + w.substring(i + 1);
        if (ws.has(word) && !excludes.has(word)) {
          ret.push(word);
        }
      }
    }
  }
  return ret;
};

var ladderLength = function(beginWord, endWord, wordList) {
  var q = [{
    word: beginWord,
    //chain: [beginWord],
    length: 1
  }];
  const visited = new Set([beginWord]);
  while (q.length > 0) {
    var entry = q.shift();
    var word = entry.word;
    var length = entry.length;
    //var chain = entry.chain;
    var neighbors = getNeighbors(word, wordList, visited);
    for (var i = 0; i < neighbors.length; ++i) {
      if (neighbors[i] === endWord) {
        //console.log([...chain, neighbors[i]]);
        return length + 1;
      }
      visited.add(neighbors[i]);
      q.push({
        word: neighbors[i],
        //chain: [...chain, neighbors[i]],
        length: length + 1
      });
    }
  }
  return 0;
};

export default ladderLength;