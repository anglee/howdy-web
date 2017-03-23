import { expect } from 'chai';
import isPalindrome from './009-PalindromeNumber';

describe('LeetOJ 009-PalindromeNumber', () => {
  describe('isPalindrome', () => {
    it('should work with test case 1', () => {
      expect(isPalindrome(121)).to.be.true;
    });
    it('should work with test case 2', () => {
      expect(isPalindrome(123)).to.be.false;
    });
    it('should work with test case 3', () => {
      expect(isPalindrome(1210)).to.be.false;
    });
    it('should work with test case 4', () => {
      expect(isPalindrome(-121)).to.be.false;
    });
  });
});
