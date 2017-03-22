import { expect } from 'chai';
import rotate from './189-RotateArray';

describe('LeetOJ 189-RotateArray', () => {
  describe('rotate', () => {
    it('should solve the given example', () => {
      const input = [1, 2, 3, 4, 5, 6, 7];
      const k = 3;
      rotate(input, k);
      expect(input).to.eql([5, 6, 7, 1, 2, 3, 4]);
    });
    it('should solve OJ test case', () => {
      const input = [-1];
      const k = 2;
      rotate(input, k);
      expect(input).to.eql([-1]);
    });
  });
});
