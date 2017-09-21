import { expect } from 'chai';
import minCost from './256-PaintHouse';

describe('LeetOJ 256-PaintHouse', () => {
  describe('minCost', () => {
    it('should solve test case', () => {
      const costs = [
        [1, 2, 3],
        [1, 4, 3],
      ];
      const expected = 3;
      expect(minCost(costs)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const costs = [];
      const expected = 0;
      expect(minCost(costs)).to.equal(expected);
    });
    it('should solve OJ test case 2', () => {
      const costs = [
        [17, 2, 17],
        [16, 16, 5],
        [14, 3, 19]
      ];
      const expected = 10;
      expect(minCost(costs)).to.equal(expected);
    });
  });
});
