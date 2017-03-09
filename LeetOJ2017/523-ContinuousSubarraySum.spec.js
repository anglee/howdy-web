import { expect } from 'chai';
import checkSubarraySum from './523-ContinuousSubarraySum';

describe('LeetOJ 523-ContinuousSubarraySum', () => {
  describe('checkSubarraySum', () => {
    it('should solve the given example 1', () => {
      const input = [23, 2, 4, 6, 7];
      const k = 6;
      expect(checkSubarraySum(input, k)).to.equal(true);
    });
    it('should solve the given example 2', () => {
      const input = [23, 2, 6, 4, 7];
      const k = 6;
      expect(checkSubarraySum(input, k)).to.equal(true);
    });
    it('should solve test case 1', () => {
      const input = [23, 5];
      const k = 6;
      expect(checkSubarraySum(input, k)).to.equal(false);
    });
    it('should solve test case 2', () => {
      const input = [23, 1];
      const k = 6;
      expect(checkSubarraySum(input, k)).to.equal(true);
    });
    it('should solve special case when k == 0, 1', () => {
      const input = [0, 0];
      const k = 0;
      expect(checkSubarraySum(input, k)).to.equal(true);
    });
    it('should solve special case when k == 0, 2', () => {
      const input = [23, 2, 6, 4, 7];
      const k = 0;
      expect(checkSubarraySum(input, k)).to.equal(false);
    });
    it('should solve special case when k == 0, 3', () => {
      const input = [0, 1, 0];
      const k = 0;
      expect(checkSubarraySum(input, k)).to.equal(false);
    });
  });
});
