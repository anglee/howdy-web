import { expect } from 'chai';
import reverseVowels from './345-ReverseVowelsOfAString';

describe('LeetOJ 345-ReverseVowelsOfAString', () => {
  describe('reverseVowels', () => {
    it('should solve the given example 1', () => {
      const input = 'hello';
      const expected = 'holle';
      expect(reverseVowels(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = 'leetcode';
      const expected = 'leotcede';
      expect(reverseVowels(input)).to.equal(expected);
    });

    it('should solve the test case 1', () => {
      const input = 'x';
      const expected = 'x';
      expect(reverseVowels(input)).to.equal(expected);
    });
    it('should solve the test case 2', () => {
      const input = 'a';
      const expected = 'a';
      expect(reverseVowels(input)).to.equal(expected);
    });
  });
});
