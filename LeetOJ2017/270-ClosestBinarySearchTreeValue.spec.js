import { expect } from 'chai';
import solution from './270-ClosestBinarySearchTreeValue';
import { treeDeserializer } from '../lib/tree';

describe('LeetOJ 270-ClosestBinarySearchTreeValue', () => {
  describe('solution', () => {
    it('should solve test case', () => {
      const root = treeDeserializer([2, 1, 100]);
      expect(solution(root, 10)).to.equal(2);
      expect(solution(root, 0.1)).to.equal(1);
      expect(solution(root, 99)).to.equal(100);
      expect(solution(root, 1000)).to.equal(100);
    });
  });
});
