import { expect } from 'chai';
import { treeDeserializer } from '../lib/tree';
import findTarget from './653-TwoSumIVInputIsABST';

describe('LeetOJ 653-TwoSumIVInputIsABST', () => {
  describe('findTarget', () => {
    it('should solve the given example 1', () => {
      const root = treeDeserializer([5, 3, 6, 1, 4, '#', 7]);
      const k = 9;
      const expected = true;
      expect(findTarget(root, k)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const root = treeDeserializer([5, 3, 6, 1, 4, '#', 7]);
      const k = 28;
      const expected = false;
      expect(findTarget(root, k)).to.equal(expected);
    });
  });
});
