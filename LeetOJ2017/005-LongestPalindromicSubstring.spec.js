import {expect} from 'chai';
import longestPalindrome, { isPalindrome } from './005-LongestPalindromicSubstring';

describe('LeetOJ 005-LongestPalindromicSubstring', () => {
  describe('longestPalindrome', () => {

    it('should work with given example 1', () => {
      const input = 'babad';
      const expected = 'bab'; // 'aba' is also a valid answer
      const actual = longestPalindrome(input);
      expect(input.includes(actual)).to.be.true;
      expect(isPalindrome(actual)).to.be.true;
      expect(actual.length).to.equal(expected.length);
    });

    it('should work with given example 2', () => {
      const input = 'cbbd';
      const expected = 'bb';
      const actual = longestPalindrome(input);
      expect(input.includes(actual)).to.be.true;
      expect(isPalindrome(actual)).to.be.true;
      expect(actual.length).to.equal(expected.length);
    });

    it("should work with test case 'a'", () => {
      const input = 'a';
      const expected = 'a';
      const actual = longestPalindrome(input);
      expect(input.includes(actual)).to.be.true;
      expect(isPalindrome(actual)).to.be.true;
      expect(actual.length).to.equal(expected.length);
    });
  });
});
