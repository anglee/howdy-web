import { expect } from 'chai';
import maxProfit from './122-BestTimeToBuyAndSellStockII';

describe('LeetOJ 122-BestTimeToBuyAndSellStockII', () => {
  describe('maxProfit', () => {
    it('should solve my test case 1', () => {
      const prices = [1, 3, 2, 8, 4, 9];
      expect(maxProfit(prices)).to.equal(13);
    });
    it('should solve my test case 2', () => {
      const prices = [5, 1];
      expect(maxProfit(prices)).to.equal(0);
    });
    it('should solve OJ test case 1', () => {
      const prices = [1, 2, 4];
      expect(maxProfit(prices)).to.equal(3);
    });
  });
});
