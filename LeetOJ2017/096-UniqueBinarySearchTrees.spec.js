import { expect } from 'chai';
import solution from './096-UniqueBinarySearchTrees';

describe('LeetOJ 096-UniqueBinarySearchTrees', () => {
  describe('solution', () => {
    it('should solve the given example', () => {
      expect(solution(3)).to.equal(5);
    });
  });
});
