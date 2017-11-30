import { expect } from 'chai';
import firstUniqChar from './387-FirstUniqueCharacterInAString';

describe('LeetOJ 387-FirstUniqueCharacterInAString', () => {
  describe('firstUniqChar', () => {
    it('should solve the given example 1', () => {
      const s = "leetcode";
      const expected = 0;
      expect(firstUniqChar(s)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const s = "loveleetcode";
      const expected = 2;
      expect(firstUniqChar(s)).to.equal(expected);
    });
  });
});
