import { expect } from 'chai';
import removeKdigits from './402-RemoveKDigits';

describe('LeetOJ 402-RemoveKDigits', () => {
  describe('removeKdigits', () => {
    it('should solve the given example 1', () => {
      const num = '1432219';
      const k = 3;
      const expected = '1219';
      expect(removeKdigits(num, k)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const num = '10200';
      const k = 1;
      const expected = '200';
      expect(removeKdigits(num, k)).to.equal(expected);
    });
    it('should solve the given example 3', () => {
      const num = '10';
      const k = 2;
      const expected = '0';
      expect(removeKdigits(num, k)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const num = '10';
      const k = 1;
      const expected = '0';
      expect(removeKdigits(num, k)).to.equal(expected);
    });
  });
});
