import { expect } from 'chai';
import isPalindrome from './125-ValidPalindrome';

describe('LeetOJ 125-ValidPalindrome', () => {

  describe('isPalindrome', () => {
    it('should work with the given example 1', () => {
      const input = 'A man, a plan, a canal: Panama';
      expect(isPalindrome(input)).to.be.true;
    });
    it('should work with the given example 2', () => {
      const input = 'race a car';
      expect(isPalindrome(input)).to.be.false;
    });
  });
});
