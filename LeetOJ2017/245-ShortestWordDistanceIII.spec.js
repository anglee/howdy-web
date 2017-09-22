import { expect } from 'chai';
import shortestWordDistance from './245-ShortestWordDistanceIII';

describe('LeetOJ 245-ShortestWordDistanceIII', () => {
  describe('shortestWordDistance', () => {
    it('should solve the given example 1', () => {
      const words = ["practice", "makes", "perfect", "coding", "makes"];
      const expected = 1;
      expect(shortestWordDistance(words, "coding", "makes")).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const words = ["practice", "makes", "perfect", "coding", "makes"];
      const expected = 3;
      expect(shortestWordDistance(words, "makes", "makes")).to.equal(expected);
    });
  });
});
