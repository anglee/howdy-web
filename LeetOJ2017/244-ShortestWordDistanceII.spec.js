import { expect } from 'chai';
import WordDistance from './244-ShortestWordDistanceII';

describe('LeetOJ 244-ShortestWordDistanceII', () => {
  describe('WordDistance', () => {
    it('should solve the given example', () => {
      const words = ["practice", "makes", "perfect", "coding", "makes"];
      const wd = new WordDistance(words);
      expect(wd.shortest("coding", "makes")).to.equal(1);
      expect(wd.shortest("coding", "practice")).to.equal(3);
    });
  });
});
