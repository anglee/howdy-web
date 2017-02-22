import { expect } from 'chai';
import ladderLength from './127-WordLadder';


describe('LeetOJ 127-WordLadder', () => {

  describe('ladderLength', () => {
    it('should return the length of the shortest path', () => {
      const beginWord = "hit";
      const endWord = "cog";
      const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
      expect(ladderLength(beginWord, endWord, wordList)).to.equal(5);
    });

    it('should return 0 of no path exists', () => {
      const beginWord = "hit";
      const endWord = "cog";
      const wordList = ["hot", "dot", "dog", "lot", "log"];
      expect(ladderLength(beginWord, endWord, wordList)).to.equal(0);
    });
  });
});
