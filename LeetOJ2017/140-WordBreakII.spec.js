import { expect } from 'chai';
import wordBreak from './140-WordBreakII';

describe('LeetOJ 140-WordBreakII', () => {
  describe('wordBreak', () => {
    it('should solve the given example', () => {
      const s = "catsanddog";
      const dict = ["cat", "cats", "and", "sand", "dog"];
      expect(wordBreak(s, dict)).to.eql([
        "cat sand dog",
        "cats and dog",
      ]);
    });
  });
});
