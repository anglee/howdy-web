import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import isSubtree from './572-SubtreeOfAnotherTree';

describe('LeetOJ 572-SubtreeOfAnotherTree', () => {
  describe('isSubtree', () => {
    it('should solve the given example 1', () => {
      const s = treeDeserializer([3, 4, 5, 1, 2]);
      const t = treeDeserializer([4, 1, 2]);
      expect(isSubtree(s, t)).to.be.true;
    });
    it('should solve the given example 2', () => {
      const s = treeDeserializer([3, 4, 5, 1, 2, '#', '#', '#', '#', 0]);
      const t = treeDeserializer([4, 1, 2]);
      expect(isSubtree(s, t)).to.be.false;
    });
    it('should solve the test case 1', () => {
      const s = treeDeserializer([]);
      const t = treeDeserializer([]);
      expect(isSubtree(s, t)).to.be.true;
    });
    it('should solve the test case 2', () => {
      const s = treeDeserializer([1]);
      const t = treeDeserializer([]);
      expect(isSubtree(s, t)).to.be.false;
    });
    it('should solve the test case 3', () => {
      const s = treeDeserializer([1]);
      const t = treeDeserializer([1]);
      expect(isSubtree(s, t)).to.be.true;
    });
  });
});
