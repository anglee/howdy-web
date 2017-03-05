import { expect } from 'chai';
import * as LL from '../lib/LinkedList';
import removeNthFromEnd from './019-RemoveNthNodeFromEndOfList';

describe('LeetOJ 019-RemoveNthNodeFromEndOfList', () => {
  describe('removeNthFromEnd', () => {
    it('should solve the given example', () => {
      const head = LL.fromArray([1, 2, 3, 4, 5]);
      const n = 2;
      const ret = removeNthFromEnd(head, n);
      expect(LL.toArray(ret)).to.eql([1, 2, 3, 5]);
    });

    it('should solve test case that the linked list has only on element', () => {
      const head = LL.fromArray([1]);
      const n = 1;
      const ret = removeNthFromEnd(head, n);
      expect(LL.toArray(ret)).to.eql([]);
    });

    it('should solve test case that node to be removed is at tail', () => {
      const head = LL.fromArray([1, 2, 3, 4, 5]);
      const n = 1;
      const ret = removeNthFromEnd(head, n);
      expect(LL.toArray(ret)).to.eql([1, 2, 3, 4]);
    });

    it('should solve test case that node to be removed is at head', () => {
      const head = LL.fromArray([1, 2, 3, 4, 5]);
      const n = 5;
      const ret = removeNthFromEnd(head, n);
      expect(LL.toArray(ret)).to.eql([2, 3, 4, 5]);
    });


    it('should solve test case: [1,2], n = 2', () => {
      const head = LL.fromArray([1, 2]);
      const n = 2;
      const ret = removeNthFromEnd(head, n);
      expect(LL.toArray(ret)).to.eql([2]);
    });
  });
});
