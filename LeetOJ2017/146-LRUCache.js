import DoublyLinkedList, { Node } from '../lib/DoublyLinkedList';

/**
 * @param {number} capacity
 */
var LRUCache0 = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = new Map();
  this.list = new DoublyLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache0.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const node = this.map.get(key);
  this.put(key, node.val.value);
  return node.val.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache0.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.list.delete(this.map.get(key));
    this.size--;
  }
  const node = new Node({key, value});
  this.map.set(key, node);
  this.list.push(node);
  this.size++;
  if (this.size > this.capacity) {
    const leastUsed = this.list.shift();
    this.map.delete(leastUsed.val.key);
    this.size--;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//export default LRUCache0;


import LinkedHashMap from '../lib/LinkedHashMap';

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new LinkedHashMap();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const ret = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, ret);
  return ret;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    this.map.shift();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;