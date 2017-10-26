import { expect } from 'chai';
import maxProfit from './123-BestTimeToBuyAndSellStockIII';

describe('LeetOJ 123-BestTimeToBuyAndSellStockIII', () => {
  describe('maxProfit', () => {
    it('should solve my test case', () => {
      const prices = [0, 5, 0, 5];
      expect(maxProfit(prices)).to.equal(10);
    });
    it('should solve OJ test case', () => {
      const prices = [1, 2, 4];
      expect(maxProfit(prices)).to.equal(3);
    });
  });
});
