import { expect } from 'chai';
import threeSum from './015-3Sum';

describe('LeetOJ 015-3Sum', () => {
  describe('threeSum', () => {
    it('should solve the given example', () => {
      const S = [-1, 0, 1, 2, -1, -4];
      expect(threeSum(S)).to.eql([
        [-1, -1, 2],
        [-1, 0, 1],
      ]);
    });
  });
});
