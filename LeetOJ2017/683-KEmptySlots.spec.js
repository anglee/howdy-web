import { expect } from 'chai';
import kEmptySlots from './683-KEmptySlots';

describe('LeetOJ 683-KEmptySlots', () => {
  describe('kEmptySlots', () => {
    it('should solve the given example 1', () => {
      const flowers = [1, 3, 2];
      const k = 1;
      const expected = 2;
      expect(kEmptySlots(flowers, k)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const flowers = [1, 2, 3];
      const k = 1;
      const expected = -1;
      expect(kEmptySlots(flowers, k)).to.equal(expected);
    });
  });
});
