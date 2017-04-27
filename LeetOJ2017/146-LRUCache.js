/**
 * @param {number} capacity
 */
var LRUCache0 = function(capacity) {
  this.list = [];
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache0.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const value = this.map.get(key);
  this._unlist(key);
  this._add(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache0.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this._unlist(key);
  }
  this._add(key, value);
  if (this.list.length > this.capacity) {
    this._evict();
  }
};

LRUCache0.prototype._unlist = function (key) {
  const index = this.list.indexOf(key);
  this.list.splice(index, 1);
  this.map.delete(key);
};

LRUCache0.prototype._add = function (key, value) {
  this.list.push(key);
  this.map.set(key, value);
};

LRUCache0.prototype._evict = function () {
  const key = this.list.shift();
  this.map.delete(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//export default LRUCache0;

// =========================================================================

import LinkedHashMap from '../lib/LinkedHashMap';

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.linkedHashMap = new LinkedHashMap();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.linkedHashMap.has(key)) {
    return -1;
  }
  const value = this.linkedHashMap.get(key);
  this.linkedHashMap.delete(key);
  this.linkedHashMap.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.linkedHashMap.delete(key);
  this.linkedHashMap.set(key, value);
  if (this.linkedHashMap.size > this.capacity) {
    this.linkedHashMap.shift();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;
