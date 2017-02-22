import { expect } from 'chai';
import reverseList from './206-ReverseLinkedList';

const toArray = (head) => { // debug only
  const ret = [];
  let node = head;
  while (node) {
    ret.push(node.val);
    node = node.next;
  }
  return ret;
};

class ListNode {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(array = []) {
    this.head = null;
    this.tail = null;

    array.forEach((it) => {
      const node = new ListNode(it);
      this.add(node);
    });
  }

  isEmpty() {
    return this.head === null;
  }

  add(node) {
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  getHead() {
    return this.head;
  }
}

describe('LeetOJ 206-ReverseLinkedList', () => {

  describe('reverseList', () => {

    it('should work with empty list', () => {
      const list = new LinkedList([]);
      expect(toArray(reverseList(list.getHead()))).to.eql([]);
    });

    it('should work with single-element list', () => {
      const list = new LinkedList([1]);
      expect(toArray(reverseList(list.getHead()))).to.eql([1]);
    });

    it('should work with 2-element list', () => {
      const list = new LinkedList([1, 2]);
      expect(toArray(reverseList(list.getHead()))).to.eql([2, 1]);
    });

    it('should work with simple test', () => {
      const list = new LinkedList([1, 2, 3]);
      expect(toArray(reverseList(list.getHead()))).to.eql([3, 2, 1]);
    });
  });
});
