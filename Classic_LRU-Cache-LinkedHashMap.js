import _ from 'lodash';

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};

class LinkedHashMap {
  constructor() {
    this.head = null; // head ptr of the list of nodes
    this.tail = null; // tail ptr of the list of nodes
    this.map = new Map(); // from key to Node;
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    return this.map.get(key).value;
  }
  set(key, value) {
    if (this.has(key)) {
      this.delete(key);
    }
    const node = new Node(key, value);
    // add to map
    this.map.set(key, node);
    // add to head of this.list
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    if (this.tail == null) {
      this.tail = node;
    }

    if (this.removeEldestEntry()) {
      const eldest = this.tail;
      // remove from map
      this.delete(eldest.key);
    }
  }
  delete(key) {
    if (this.has(key)) {
      const node = this.map.get(key);
      // delete from map
      this.map.delete(key);
      // delete from list
      if (node.prev) {
        node.prev.next = node.next;
      } else { // node is at head, update head
        this.head = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      } else { // node is at tail, update tail
        this.tail = node.prev;
      }
    }
  }
  keys() {
    //return this.map.keys().reverse();
    const ret = [];
    let node = this.head;
    while (node) {
      ret.push(node.key);
      node = node.next;
    }
    return ret;
  }
  values() {
    const ret = [];
    let node = this.head;
    while (node) {
      ret.push(node.value);
      node = node.next;
    }
    return ret;
  }
  info() {
    const ret = [];
    let node = this.head;
    while (node) {
      ret.push(`'${node.key}' => ${node.value}`);
      node = node.next;
    }
    return `from newest to oldest:\n{ ${ret.join(', ')} }`;
  }
  removeEldestEntry() {
    // reference:
    // https://docs.oracle.com/javase/7/docs/api/java/util/LinkedHashMap.html#removeEldestEntry(java.util.Map.Entry)
    return false;
  }
}

class LRU_Cache extends LinkedHashMap {
  constructor(capacity) {
    super();
    this.capacity = capacity;
  }
  removeEldestEntry() {
    return this.map.size > this.capacity;
  }
}

export {
  LinkedHashMap,
  LRU_Cache
};
