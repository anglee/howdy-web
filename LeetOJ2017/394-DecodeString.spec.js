import { expect } from 'chai';
import decodeString from './394-DecodeString';

describe('LeetOJ 394-DecodeString', () => {
  describe('decodeString', () => {
    it('should solve the given example 1', () => {
      const input = "3[a]2[bc]";
      const expected = 'aaabcbc';
      expect(decodeString(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = "3[a2[c]]";
      const expected = 'accaccacc';
      expect(decodeString(input)).to.equal(expected);
    });
    it('should solve the given example 3', () => {
      const input = "2[abc]3[cd]ef";
      const expected = 'abcabccdcdcdef';
      expect(decodeString(input)).to.equal(expected);
    });
  });
});
