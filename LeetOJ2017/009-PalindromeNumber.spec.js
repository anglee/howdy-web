import { expect } from 'chai';
import isPalindrome from './009-PalindromeNumber';

describe('LeetOJ 009-PalindromeNumber', () => {
  describe('isPalindrome', () => {
    it('should work with test case', () => {
      expect(isPalindrome(121)).to.be.true;
    });
    it('should work with test case', () => {
      expect(isPalindrome(123)).to.be.false;
    });
  });
});
