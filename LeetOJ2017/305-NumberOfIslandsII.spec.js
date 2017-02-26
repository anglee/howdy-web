import { expect } from 'chai';
import numIslands2 from './305-NumberOfIslandsII';

describe('LeetOJ 305-NumberOfIslandsII', () => {
  describe('numIslands2', () => {
    it('should solve the given example', () => {
      const m = 3;
      const n = 3;
      const positions = [[0, 0], [0, 1], [1, 2], [2, 1]];
      expect(numIslands2(m, n, positions))
        .to.eql([1, 1, 2, 3]);
    });
    it('should solve the test case 1', () => {
      const m = 3;
      const n = 3;
      const positions = [[0, 0], [0, 1], [2, 1], [1,1]];
      expect(numIslands2(m, n, positions))
        .to.eql([1, 1, 2, 1]);
    });
    it('should solve the test case 2', () => {
      const m = 3;
      const n = 3;
      const positions = [[0,1],[1,2],[2,1],[1,0],[0,2],[0,0],[1,1]];
      expect(numIslands2(m, n, positions))
        .to.eql([1, 2, 3, 4, 3, 2, 1]);
    });
  });
});
