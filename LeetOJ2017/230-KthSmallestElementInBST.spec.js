import { expect } from 'chai';
import { treeDeserializer as fromArray } from '../lib/tree'
import kthSmallest from './230-KthSmallestElementInBST';

describe('LeetOJ 230-KthSmallestElementInBST', () => {
  describe('kthSmallest', () => {
    it('should solve the given example', () => {
      const root = fromArray([3, 2, 5, 1, '#', 4, 6]);
      expect(kthSmallest(root, 1)).to.equal(1);
      expect(kthSmallest(root, 2)).to.equal(2);
      expect(kthSmallest(root, 3)).to.equal(3);
      expect(kthSmallest(root, 4)).to.equal(4);
      expect(kthSmallest(root, 5)).to.equal(5);
      expect(kthSmallest(root, 6)).to.equal(6);
    });
  });
});
