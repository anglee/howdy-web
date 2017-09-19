import { expect } from 'chai';
import MapSum from './677-MapSumPairs';

describe('LeetOJ 677-MapSumPairs', () => {
  describe('MapSum', () => {
    it('should solve the given example', () => {
      var mapSum = new MapSum();
      mapSum.insert('apple', 3);
      expect(mapSum.sum('app')).to.equal(3);
      mapSum.insert('app', 2);
      expect(mapSum.sum('app')).to.equal(5);
    });
    it('should solve OJ test case 1', () => {
      var mapSum = new MapSum();
      mapSum.insert('aa', 3);
      expect(mapSum.sum('a')).to.equal(3);
      mapSum.insert('aa', 2);
      expect(mapSum.sum('a')).to.equal(2);
    });
  });
});
