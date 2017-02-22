import { expect } from 'chai';
import maxProfit from './121-BestTimeToBuyAndSellStock';

describe('LeetOJ 121-BestTimeToBuyAndSellStock', () => {

  describe('maxProfit', () => {
    it('should work with given example 1', () => {
      const input = [7, 1, 5, 3, 6, 4];
      expect(maxProfit(input)).to.equal(5);

      // max. difference = 6-1 = 5 (not 7-1 = 6,
      // as selling price needs to be larger than buying price)
    });

    it('should work with given example 2', () => {
      const input = [7, 6, 4, 3, 1];
      expect(maxProfit(input)).to.equal(0);

      // In this case, no transaction is done, i.e. max profit = 0.
    });
  });
});
