import { expect } from 'chai';
import minSubArrayLen from './209-MinimumSizeSubarraySum';

describe('LeetOJ 209-MinimumSizeSubarraySum', () => {
  describe('minSubArrayLen', () => {
    it('should solve the given example', () => {
      const s = 7;
      const nums = [2, 3, 1, 2, 4, 3];
      expect(minSubArrayLen(s, nums)).to.equal(2);
    });
    it('should return 0 if there is no such sub array', () => {
      const s = 100;
      const nums = [2, 3, 1, 2, 4, 3];
      expect(minSubArrayLen(s, nums)).to.equal(0);
    });
  });
});
