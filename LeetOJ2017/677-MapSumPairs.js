/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.trie = { val: 0 };
};

const existingVal = (trie, key) => {
  let node = trie;
  for (let ch of key) {
    if (!node[ch]) {
      return 0;
    }
    node = node[ch];
  }
  return node.isAnEnd ? node.val : 0;
};
/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let inc = val - existingVal(this.trie, key);
  let node = this.trie;
  node.val += inc;
  for (let ch of key) {
    if (!node[ch]) {
      node[ch] = { val: 0 };
    }
    node = node[ch];
    node.val += inc;
  }
  node.isAnEnd = true;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let node = this.trie;
  for (let ch of prefix) {
    if (!node[ch]) {
      return 0;
    }
    node = node[ch];
  }
  return node.val;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

export default MapSum;