import { expect } from 'chai';
import generatePalindromes from './267-PalindromePermutationII';

describe('LeetOJ 267-Palindrome PermutationII', () => {

  describe('generatePalindromes', () => {
    it('should solve the given example "aabb"', () => {
      expect(generatePalindromes('aabb'))
        .to.eql(["abba", "baab"]);
    });
    it('should solve the given example "abc"', () => {
      expect(generatePalindromes('abc'))
        .to.eql([]);
    });
    it('should solve test case "aaa"', () => {
      expect(generatePalindromes('aaa'))
        .to.eql(['aaa']);
    });
    it('should solve test case "aabbccc"', () => {
      expect(generatePalindromes('aabbccc').sort())
        .to.eql([
        "abcccba",
        "acbcbca",
        "bacccab",
        "bcacacb",
        "cabcbac",
        "cbacabc"
      ].sort());
    });
  });
});
