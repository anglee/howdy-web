import { expect } from 'chai';
import canPlaceFlowers from './605-CanPlaceFlowers';

describe('LeetOJ 605-CanPlaceFlowers', () => {
  describe('canPlaceFlowers', () => {
    it('should solve the given example 1', () => {
      const flowerbed = [1, 0, 0, 0, 1];
      const n = 1;
      expect(canPlaceFlowers(flowerbed, n)).to.equal(true);
    });
    it('should solve the given example 2', () => {
      const flowerbed = [1, 0, 0, 0, 1];
      const n = 2;
      expect(canPlaceFlowers(flowerbed, n)).to.equal(false);
    });
    it('should solve OJ test case 1', () => {
      const flowerbed = [1, 0, 0, 0, 0, 0, 1];
      const n = 2;
      expect(canPlaceFlowers(flowerbed, n)).to.equal(true);
    });
    it('should solve OJ test case 2', () => {
      const flowerbed = [1, 0, 1, 0, 1, 0, 1];
      const n = 0;
      expect(canPlaceFlowers(flowerbed, n)).to.equal(true);
    });
  });
});
