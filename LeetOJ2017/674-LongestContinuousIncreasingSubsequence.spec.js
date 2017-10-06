import { expect } from 'chai';
import findLengthOfLCIS from './674-LongestContinuousIncreasingSubsequence';

describe('LeetOJ 674-LongestContinuousIncreasingSubsequence', () => {
  describe('findLengthOfLCIS', () => {
    it('should solve the given example 1', () => {
      const input = [1, 3, 5, 4, 7];
      const expected = 3;
      expect(findLengthOfLCIS(input)).to.equal(expected);
    });

    it('should solve the given example 2', () => {
      const input = [2, 2, 2, 2, 2];
      const expected = 1;
      expect(findLengthOfLCIS(input)).to.equal(expected);
    });
  });
});
