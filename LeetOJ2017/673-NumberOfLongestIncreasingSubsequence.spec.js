import { expect } from 'chai';
import findNumberOfLIS from './673-NumberOfLongestIncreasingSubsequence';

describe('LeetOJ 673-NumberOfLongestIncreasingSubsequence', () => {
  describe('findNumberOfLIS', () => {
    it('should solve the given example 1', () => {
      const input = [1, 3, 5, 4, 7];
      const expected = 2;
      expect(findNumberOfLIS(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = [2, 2, 2, 2, 2];
      const expected = 5;
      expect(findNumberOfLIS(input)).to.equal(expected);
    });
  });
});
