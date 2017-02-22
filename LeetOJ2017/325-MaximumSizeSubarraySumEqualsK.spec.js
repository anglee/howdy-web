import { expect } from 'chai';
import maxSubArrayLen from './325-MaximumSizeSubarraySumEqualsK';

describe('LeetOJ 325-MaximumSizeSubarraySumEqualsK', () => {

  describe('maxSubArrayLen', () => {
    it('should work with given example 1', () => {
      const nums = [1, -1, 5, -2, 3];
      const k = 3;
      expect(maxSubArrayLen(nums, k)).to.equal(4);
      // because the subarray [1, -1, 5, -2] sums to 3 and is the longest
    });
    it('should work with given example 2', () => {
      const nums = [-2, -1, 2, 1];
      const k = 1;
      expect(maxSubArrayLen(nums, k)).to.equal(2);
      // because the subarray [-1, 2] sums to 1 and is the longest
    });
  });

});