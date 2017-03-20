import { expect } from 'chai';
import { fromArray, findNodeOfValue, toArray } from '../lib/LinkedList';
import getIntersectionNode from './160-IntersectionOfTwoLinkedLists';

describe('LeetOJ 160-IntersectionOfTwoLinkedLists', () => {
  describe('getIntersectionNode', () => {
    it('should solve the given example', () => {
      const listA = fromArray([1, 2]);
      const listB = fromArray([1, 2, 3]);
      const listC = fromArray([1, 2, 3]);
      const nodeC1 = listC;
      const nodeA2 = findNodeOfValue(listA, 2);
      const nodeB3 = findNodeOfValue(listB, 3);
      nodeA2.next = nodeC1;
      nodeB3.next = nodeC1;
      expect(getIntersectionNode(listA, listB)).to.equal(nodeC1);
    });
  });
});
