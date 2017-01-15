import { expect } from 'chai';
import lengthOfLongestSubstring from './003-LongestSubstringWithoutRepeatingCharacters';

describe('LeetOJ 003-LongestSubstringWithoutRepeatingCharacters', () => {
  describe('lengthOfLongestSubstring', () => {

    it("should return 3 on input of 'abcabcbb'", () => {
      const input = 'abcabcbb';
      expect(lengthOfLongestSubstring(input)).to.equal(3); // 'abc'
    });

    it("should return 1 on input of 'bbbbb'", () => {
      const input = 'bbbbb';
      expect(lengthOfLongestSubstring(input)).to.equal(1); // 'b'
    });

    it("should return 3 on input of 'pwwkew'", () => {
      const input = 'pwwkew';
      expect(lengthOfLongestSubstring(input)).to.equal(3); // 'wke'
    });

    it("should return 1 on input of 'c'", () => {
      const input = 'c';
      expect(lengthOfLongestSubstring(input)).to.equal(1); // 'c'
    });


    it("should return 2 on input of 'au'", () => {
      const input = 'au';
      expect(lengthOfLongestSubstring(input)).to.equal(2); // 'au'
    });
  });
});
