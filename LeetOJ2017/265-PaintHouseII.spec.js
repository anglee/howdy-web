import { expect } from 'chai';
import minCostII from './265-PaintHouseII';

describe('LeetOJ 265-PaintHouseII', () => {
  describe('minCostII', () => {
    it('should solve test case 1', () => {
      const costs = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
      ];
      expect(minCostII(costs)).to.equal(4);
    });
    it('should solve test case 2', () => {
      const costs = [
        [1, 2, 3],
        [2, 1, 3],
        [1, 2, 3],
      ];
      expect(minCostII(costs)).to.equal(3);
    });

    it('should solve OJ test case 1', () => {
      const costs = [[4, 16], [15, 5], [18, 17], [10, 12], [14, 10], [3, 10], [2, 11], [18, 14], [9, 1], [14, 13]];
      expect(minCostII(costs)).to.equal(101);
    });

    it('should solve OJ test case 2', () => {
      const costs = [[14, 18, 16], [18, 4, 9], [2, 20, 2], [4, 19, 10], [7, 13, 4], [11, 4, 17], [10, 11, 20], [8, 3, 16], [4, 17, 15], [8, 7, 3], [1, 19, 4], [12, 11, 18], [10, 5, 6], [14, 19, 19], [5, 8, 12], [12, 16, 13], [20, 8, 16], [17, 15, 2], [14, 2, 20], [2, 6, 14], [3, 17, 17], [17, 8, 3], [16, 8, 4], [7, 14, 8], [13, 3, 7], [15, 11, 14], [19, 20, 10], [4, 2, 6]];
      expect(minCostII(costs)).to.equal(181);
    });

    it('should solve OJ test case 3', () => {
      const costs = [[1, 2], [1, 19], [17, 13], [3, 20], [20, 16], [9, 8], [2, 7], [19, 18], [14, 1], [16, 20], [5, 8], [10, 10], [1, 15], [15, 6], [16, 13], [17, 2], [11, 16], [6, 13], [5, 7], [17, 5], [16, 13], [19, 1]];
      expect(minCostII(costs)).to.equal(230);
    });

    it('should solve test case - empty', () => {
      const costs = [];
      expect(minCostII(costs)).to.equal(0);
    });
  });
});
