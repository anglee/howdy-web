import { expect } from 'chai';
import maxProfit from './309-BestTimeToBuyAndSellStockWithCooldown';

describe('LeetOJ 309-BestTimeToBuyAndSellStockWithCooldown', () => {
  describe('maxProfit', () => {
    it('should solve the given example', () => {
      const prices = [1, 2, 3, 0, 2];
      expect(maxProfit(prices)).to.equal(3);
    });
  });
});
