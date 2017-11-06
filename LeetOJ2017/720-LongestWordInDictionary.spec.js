import { expect } from 'chai';
import longestWord from './720-LongestWordInDictionary';

describe('LeetOJ 720-LongestWordInDictionary', () => {
  describe('longestWord', () => {
    it('should solve the given example 1', () => {
      const words = ["w", "wo", "wor", "worl", "world"];
      const expected = 'world';
      expect(longestWord(words)).to.equal(expected);
    });

    it('should solve the given example 2', () => {
      const words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
      const expected = 'apple';
      expect(longestWord(words)).to.equal(expected);
    });

    it('should solve the OJ test case 1', () => {
      const words = ["t", "ti", "tig", "tige", "tiger", "e", "en", "eng", "engl", "engli", "englis", "english", "h", "hi", "his", "hist", "histo", "histor", "history"];
      const expected = 'english';
      expect(longestWord(words)).to.equal(expected);
    });
  });
});
