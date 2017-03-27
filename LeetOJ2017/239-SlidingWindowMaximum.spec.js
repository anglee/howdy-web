import { expect } from 'chai';
import maxSlidingWindow from './239-SlidingWindowMaximum';

describe('LeetOJ 239-SlidingWindowMaximum', () => {
  describe('maxSlidingWindow', () => {
    it('should solve the given example', () => {
      const nums = [1, 3, -1, -3, 5, 3, 6, 7];
      const k = 3;
      expect(maxSlidingWindow(nums, k)).to.eql([3, 3, 5, 5, 6, 7]);
    });
    it('should solve OJ test case', () => {
      const nums = [1, -1];
      const k = 1;
      expect(maxSlidingWindow(nums, k)).to.eql([1, -1]);
    });
  });
});
