import { expect } from 'chai';
import { fromArray, findNodeOfValue } from '../lib/LinkedList';
import hasCycle from './141-LinkedListCycle';

describe('LeetOJ 141-LinkedListCycle', () => {
  describe('hasCycle', () => {
    it('should solve test case 1', () => {
      const linkedList = fromArray([1, 2, 3, 4]);
      expect(hasCycle(linkedList)).to.equal(false);
    });
    it('should solve test case 2', () => {
      const linkedList = fromArray([1, 2, 3, 4]);
      const node2 = findNodeOfValue(linkedList, 2);
      const node4 = findNodeOfValue(linkedList, 4);
      node4.next = node2;
      expect(hasCycle(linkedList)).to.equal(true);
    });
  });
});
