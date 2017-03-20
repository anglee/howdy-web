import { expect } from 'chai';
import { fromArray, findNodeOfValue, toArray } from '../lib/LinkedList';
import detectCycle from './142-LinkedListCycleII';

describe('LeetOJ 142-LinkedListCycleII', () => {
  describe('detectCycle', () => {
    it('should solve given example', () => {
      const list = fromArray([1, 2, 4, 5, 6]);
      const node4 = findNodeOfValue(list, 4);
      const node6 = findNodeOfValue(list, 6);
      node6.next = node4;
      expect(detectCycle(list)).to.equal(node4);
    });
  });
});
