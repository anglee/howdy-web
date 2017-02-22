import { expect } from 'chai';
import wordBreak from './139-WordBreak';

describe('LeetOJ 139-WordBreak', () => {
  describe('wordBreak', () => {
    it('should work with the given example', () => {
      const s = 'leetcode';
      // const s = 'code';
      // const s = '';
      const wordDict = ['leet', 'code'];

      expect(wordBreak(s, wordDict)).to.be.true;
    });
  });
});