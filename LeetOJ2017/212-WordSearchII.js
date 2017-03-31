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
  return null;
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

const dfs = (board, w, h, trie, startX, startY, isVisited, resultSet) => {
  const doDFS = (x, y, prefix) => {
    if (x < 0
      || x >= w
      || y < 0
      || y >= h
      || isVisited[y][x]
      || !trie.startsWith(prefix)
    ) {
      return;
    }

    isVisited[y][x] = true;
    const newPrefix = prefix + board[y][x];
    if (trie.search(newPrefix)) {
      resultSet.add(newPrefix);
    }
    doDFS(x + 1, y, newPrefix);
    doDFS(x - 1, y, newPrefix);
    doDFS(x, y - 1, newPrefix);
    doDFS(x, y + 1, newPrefix);
    isVisited[y][x] = false;
  };

  doDFS(startX, startY, '');
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  // first build Trie representation of words
  const trie = new Trie();
  words.forEach(w => { trie.insert(w); });

  // then for each cell in the board DFS and add words that appear in the Trie
  // when the prefix is not in the Trie, backtrack
  const h = board.length;
  if (h === 0) { return []; }
  const w = board[0].length;
  if (w === 0) { return []; }

  const resultSet = new Set();
  const isVisited = Array(h).fill().map(() => Array(w).fill(false));
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      dfs(board, w, h, trie, x, y, isVisited, resultSet);
    }
  }
  return Array.from(resultSet);
};

export default findWords;