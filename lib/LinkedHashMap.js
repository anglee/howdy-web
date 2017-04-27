import DoublyLinkedList, { Node } from './DoublyLinkedList';

class LinkedHashMap {
  constructor() {
    this.map = new Map();
    this.list = new DoublyLinkedList();
  }

  set(key, value) {
    if (this.has(key)) {
      this.delete(key);
    }
    const node = new Node({ key, value });
    this.map.set(key, node);
    this.list.push(node);
    return this;
  }

  get(key) {
    const node = this.map.get(key);
    const { data: { value } } = node;
    return value;
  }

  delete(key) {
    if (!this.has(key)) {
      return;
    }
    const node = this.map.get(key);
    this.map.delete(key);
    this.list.delete(node);
  }

  shift() {
    if (this.size === 0) {
      return;
    }
    const { data: { key } } = this.list.head;
    this.delete(key);
    return true;
  }

  has(key) {
    return this.map.has(key);
  }

  get size() {
    return this.map.size;
  }
}

export default LinkedHashMap;
