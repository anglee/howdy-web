import { expect } from 'chai';
import shortestDistance from './243-ShortestWordDistance';

describe('LeetOJ 243-ShortestWordDistance', () => {
  describe('shortestDistance', () => {
    it('should solve the given example 1', () => {
      const words = ["practice", "makes", "perfect", "coding", "makes"];
      const expected = 3;
      expect(shortestDistance(words, "coding", "practice")).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const words = ["practice", "makes", "perfect", "coding", "makes"];
      const expected = 1;
      expect(shortestDistance(words, "makes", "coding")).to.equal(expected);
    });
  });
});
