import { expect } from 'chai';
import isPowerOfThree from './326-PowerOfThree';

describe('LeetOJ 326-PowerOfThree', () => {
  describe('isPowerOfThree', () => {
    it('should solve test case 1', () => {
      expect(isPowerOfThree(3)).to.equal(true);
    });
    it('should solve test case 2', () => {
      expect(isPowerOfThree(7)).to.equal(false);
    });
    it('should solve test case 3', () => {
      expect(isPowerOfThree(81)).to.equal(true);
    });
  });
});
