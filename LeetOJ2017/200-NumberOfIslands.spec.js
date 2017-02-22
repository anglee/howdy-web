import { expect } from 'chai';
import numIslands from './200-NumberOfIslands';

describe('LeetOJ 200-NumberOfIslands', () => {
  describe('numIslands', () => {
    it('should work with given example 1', () => {
      const grid = [
        '11110',
        '11010',
        '11000',
        '00000',
      ];
      expect(numIslands(grid)).to.equal(1);
    });
    it('should work with given example 2', () => {
      const grid = [
        '11000',
        '11000',
        '00100',
        '00011',
      ];
      expect(numIslands(grid)).to.equal(3);
    });
    it('should work with empty input', () => {
      const grid = [];
      expect(numIslands(grid)).to.equal(0);
    });
  });
});
