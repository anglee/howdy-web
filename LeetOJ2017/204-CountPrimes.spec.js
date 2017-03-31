import { expect } from 'chai';
import countPrimes from './204-CountPrimes';

describe('LeetOJ 204-CountPrimes', () => {
  describe('countPrimes', () => {
    it('should solve test case 0', () => {
      expect(countPrimes(0)).to.equal(0);
    });
    it('should solve test case 1', () => {
      expect(countPrimes(1)).to.equal(0);
    });
    it('should solve test case 2', () => {
      expect(countPrimes(2)).to.equal(0);
    });
    it('should solve test case 3', () => {
      expect(countPrimes(3)).to.equal(1);
    });
    it('should solve test case 4', () => {
      expect(countPrimes(4)).to.equal(2);
    });
    it('should solve test case 5', () => {
      expect(countPrimes(5)).to.equal(2);
    });
    it('should solve test case 6', () => {
      expect(countPrimes(6)).to.equal(3);
    });
    it('should solve test case 13', () => {
      expect(countPrimes(13)).to.equal(5);
    });
  });
});
