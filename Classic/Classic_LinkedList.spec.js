import _ from 'lodash';
import { expect } from 'chai';
import {
  Node,
  linkedListToString,
  deleteNode,
  reverseLinkedList
} from './Classic_LinkedList';

describe('Classic_LinkedList', () => {
  let linkedList = null;
  beforeEach(() => {
    let head = null;
    let last = null;
    _.range(5).forEach((it) => {
      const node = new Node(it);
      if (!head) {
        head = node;
      }
      if (last) {
        last.next = node;
      }
      last = node;
    });
    linkedList = head;
  });
  describe('linkedListToString', () => {
    it('should turn a linkedlist into string', () => {
      expect(linkedListToString(linkedList)).to.equal('0, 1, 2, 3, 4');
    });
  });

  describe('deleteNode', () => {
    it('should delete node from linked list', () => {
      const head = deleteNode(linkedList, 2);
      expect(linkedListToString(head)).to.equal('0, 1, 3, 4');
    });
  });

  describe('reverseLinkedList', () => {
    it('should reverse linked list', () => {
      const head = reverseLinkedList(linkedList);
      expect(linkedListToString(head)).to.equal('4, 3, 2, 1, 0');
    });
  });

});

