import { expect } from 'chai';
import isPerfectSquare from './367-ValidPerfectSquare';

describe('LeetOJ 367-ValidPerfectSquare', () => {
  describe('isPerfectSquare', () => {
    it('should solve the given example 1', () => {
      const input = 16;
      const expected = true;
      expect(isPerfectSquare(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = 14;
      const expected = false;
      expect(isPerfectSquare(input)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = 1;
      const expected = true;
      expect(isPerfectSquare(input)).to.equal(expected);
    });
    it('should solve OJ test case 2', () => {
      const input = 104976;
      const expected = true;
      expect(isPerfectSquare(input)).to.equal(expected);
    });
  });
});
