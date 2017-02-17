import {expect} from 'chai';
import canPermutePalindrome from './266-PalindromePermutation';

describe('LeetOJ 266-PalindromePermutation', () => {

  describe('canPermutePalindrome', () => {
    it("should solve the given example 'code'", () => {
      expect(canPermutePalindrome('code')).to.equal(false);
    });
    it("should solve the given example 'aab'", () => {
      expect(canPermutePalindrome('aab')).to.equal(true);
    });
    it("should solve the given example 'carerac'", () => {
      expect(canPermutePalindrome('carerac')).to.equal(true);
    });
  });
});
