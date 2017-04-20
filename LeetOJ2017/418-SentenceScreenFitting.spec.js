import { expect } from 'chai';
import wordsTyping from './418-SentenceScreenFitting';

describe('LeetOJ 418-SentenceScreenFitting', () => {
  describe('wordsTyping', () => {
    it('should solve the given example 1', () => {
      const rows = 2;
      const cols = 8;
      const sentence = ["hello", "world"];
      expect(wordsTyping(sentence, rows, cols)).to.equal(1);
    });
    it('should solve the given example 2', () => {
      const rows = 3;
      const cols = 6;
      const sentence = ["a", "bcd", "e"];
      expect(wordsTyping(sentence, rows, cols)).to.equal(2);
    });
    it('should solve the given example 3', () => {
      const rows = 4;
      const cols = 5;
      const sentence = ["I", "had", "apple", "pie"];
      expect(wordsTyping(sentence, rows, cols)).to.equal(1);
    });
    it('should solve the given OJ test case 1', () => {
      const rows = 10000;
      const cols = 9001;
      const sentence = ["try", "to", "be", "better"];
      expect(wordsTyping(sentence, rows, cols)).to.equal(5293333);
    });
  });
});
