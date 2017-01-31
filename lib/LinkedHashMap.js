import DoublyLinkedList, { Node } from './DoublyLinkedList';

function LinkedHashMap() {
  this.map = new Map();
  this.list = new DoublyLinkedList();
  this.size = 0;
}

LinkedHashMap.prototype.has = function(key) {
  return this.map.has(key);
};

LinkedHashMap.prototype.set = function(key, value) {
  if (this.map.has(key)) {
    this.list.delete(this.map.get(key));
    this.size--;
  }
  const node = new Node({key, value});
  this.map.set(key, node);
  this.list.push(node);
  this.size++;
  return this;
};

LinkedHashMap.prototype.get = function(key) {
  const node = this.map.get(key);
  return node.val.value;
};


LinkedHashMap.prototype.delete = function(key) {
  if (!this.map.has(key)) {
    return false;
  }

  const node = this.map.get(key);
  this.map.delete(key);
  this.list.delete(node);
  this.size--;
  return true;
};


LinkedHashMap.prototype.shift = function() {
  if (this.size === 0) {
    return undefined;
  }
  const node = this.list.shift();
  this.map.delete(node.val.key);
  return true;
};

export default LinkedHashMap;
