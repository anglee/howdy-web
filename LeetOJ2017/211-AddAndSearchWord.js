const search = (root, s) => {
  const char = s[0];
  if (char === '#' && root['#']) {
    return true;
  }
  if (char === '.') {
    for (let key in root) {
      if (search(root[key], s.slice(1))) {
        return true;
      }
    }
  } else if (root[char]) {
    return search(root[char], s.slice(1));
  }
  return false;
};


/**
 * @constructor
 */
var WordDictionary = function() {
  this.tree = {};
  this.memoized = {};
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
  if (this.memoized[word]) {
    return;
  }
  this.memoized = {}; // invalidate the memoization cache
  const chars = [...word.split(''), '#'];
  let node = this.tree;
  chars.forEach(char => {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  });
};



/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
  if (this.memoized.hasOwnProperty(word)) {
    return this.memoized[word];
  }
  const chars = [...word.split(''), '#'];
  const ret = search(this.tree, chars);
  this.memoized[word] = ret;
  return ret;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
export default WordDictionary;
