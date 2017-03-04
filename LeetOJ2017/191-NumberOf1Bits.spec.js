import { expect } from 'chai';
import hammingWeight from './191-NumberOf1Bits';

describe('LeetOJ 191-NumberOf1Bits', () => {
  describe('hammingWeight', () => {

    it('should return number of 1 bits - 0', () => {
      expect(hammingWeight(0)).to.equal(0);
    });
    it('should return number of 1 bits - 1', () => {
      expect(hammingWeight(1)).to.equal(1);
    });
    it('should return number of 1 bits - 2', () => {
      expect(hammingWeight(2)).to.equal(1);
    });
    it('should return number of 1 bits - 3', () => {
      expect(hammingWeight(3)).to.equal(2);
    });
    it('should return number of 1 bits - 4', () => {
      expect(hammingWeight(4)).to.equal(1);
    });
    it('should return number of 1 bits - 2147483648', () => {
      expect(hammingWeight(2147483648)).to.equal(1);
    });
  });
});
