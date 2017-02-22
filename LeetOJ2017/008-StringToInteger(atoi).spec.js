import { expect } from 'chai';
import myAtoi from './008-StringToInteger(atoi)';

describe('LeetOJ 008-StringToInteger(atoi)', () => {
  describe('myAtoi', () => {
    it('should work with test case 100', () => {
      expect(myAtoi('100')).to.equal(100);
    });

    it('should work with test case -100', () => {
      expect(myAtoi('-100')).to.equal(-100);
    });

    it('should work with test case 0', () => {
      expect(myAtoi('100')).to.equal(100);
    });

    it('should work with test case "-2147483648"', () => {
      expect(myAtoi('-2147483648')).to.equal(-2147483648);
    });

    it('should trim whitespaces', () => {
      expect(myAtoi('  100')).to.equal(100);
    });
  });
});

