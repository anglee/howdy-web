import { expect } from 'chai';
import longestCommonPrefix from './014-LongestCommonPrefix';

describe('LeetOJ 014-LongestCommonPrefix', () => {
  describe('longestCommonPrefix', () => {
    it('should solve the given example', () => {
      const input = [
        'abcd',
        'abcde',
        'abc',
      ];
      const expected = 'abc';
      expect(longestCommonPrefix(input)).to.equal(expected);
    });
  });
});
