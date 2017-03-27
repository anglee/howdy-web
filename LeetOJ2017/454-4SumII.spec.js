import { expect } from 'chai';
import fourSumCount from './454-4SumII';

describe('LeetOJ 454-4SumII', () => {
  describe('fourSumCount', () => {
    it('should solve the given example', () => {
      const A = [1, 2];
      const B = [-2, -1];
      const C = [-1, 2];
      const D = [0, 2];
      expect(fourSumCount(A, B, C, D)).to.equal(2);
    });
  });
});
