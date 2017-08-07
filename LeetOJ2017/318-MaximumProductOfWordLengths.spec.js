import { expect } from 'chai';
import maxProduct from './318-MaximumProductOfWordLengths';

describe('LeetOJ 318-MaximumProductOfWordLengths', () => {
  describe('maxProduct', () => {
    it('should solve the given example 1', () => {
      const input = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
      const expected = 16;
      expect(maxProduct(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"];
      const expected = 4;
      expect(maxProduct(input)).to.equal(expected);
    });
    it('should solve the given example 3', () => {
      const input = ["a", "aa", "aaa", "aaaa"];
      const expected = 0;
      expect(maxProduct(input)).to.equal(expected);
    });
    it('should solve OJ example 1', () => {
      const input = ["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"];
      const expected = 15;
      expect(maxProduct(input)).to.equal(expected);
    });
  });
});
