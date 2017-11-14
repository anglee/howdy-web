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
var WordDictionary0 = function() {
  this.tree = {};
  this.memoized = {};
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary0.prototype.addWord = function(word) {
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
WordDictionary0.prototype.search = function(word) {
  if (this.memoized.hasOwnProperty(word)) {
    return this.memoized[word];
  }
  const chars = [...word.split(''), '#'];
  const ret = search(this.tree, chars);
  this.memoized[word] = ret;
  return ret;
};

/**
 * Your WordDictionary0 object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary0();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
// export default WordDictionary0;

//--------------------------------------------------------------------------------------------------

class Node {
  constructor() {
    this.children = {};
    this.isLeaf = false;
  }
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.trie = new Node();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.trie;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new Node();
    }
    node = node.children[char];
  }
  node.isLeaf = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (node, word) => {
    if (word.length === 0) {
      return node.isLeaf;
    }
    if (word[0] !== '.') {
      const char = word[0];
      return !!(node.children[char] && dfs(node.children[char], word.substring(1)));
    } else {
      for (let child in node.children) {
        if (dfs(node.children[child], word.substring(1))) {
          return true;
        }
      }
      return false;
    }
  };
  return dfs(this.trie, word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

export default WordDictionary;

