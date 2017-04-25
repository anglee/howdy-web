/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new Map();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const chars = word.split('');
  let node = this.root;
  for (const char of chars) {
    if (!node.has(char)) {
      node.set(char, new Map());
    }
    node = node.get(char);
  }
  node.set('nil', true);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const chars = word.split('');
  let node = this.root;
  for (const char of chars) {
    if (!node.has(char)) {
      return false;
    }
    node = node.get(char);
  }
  return node.get('nil') === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  const chars = prefix.split('');
  let node = this.root;
  for (const char of chars) {
    if (!node.has(char)) {
      return false;
    }
    node = node.get(char);
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;