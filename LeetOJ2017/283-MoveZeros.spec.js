import { expect } from 'chai';
import moveZeroes from './283-MoveZeroes';

describe('LeetOJ 283-MoveZeroes', () => {
  describe('moveZeroes', () => {
    it('should work with given example', () => {
      const nums = [0, 1, 0, 3, 12];
      moveZeroes(nums);
      const expected = [1, 3, 12, 0, 0];
      expect(nums).to.eql(expected);
    });

    it('should work with all zero', () => {
      const nums = [0, 0, 0];
      moveZeroes(nums);
      const expected = [0, 0, 0];
      expect(nums).to.eql(expected);
    });

    it('should work with all non-zero', () => {
      const nums = [1, 3, 2];
      moveZeroes(nums);
      const expected = [1, 3, 2];
      expect(nums).to.eql(expected);
    });

    it('should work with empty', () => {
      const nums = [];
      moveZeroes(nums);
      const expected = [];
      expect(nums).to.eql(expected);
    });
  });
});

