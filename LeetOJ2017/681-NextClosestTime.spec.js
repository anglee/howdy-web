import { expect } from 'chai';
import nextClosestTime from './681-NextClosestTime';

describe('LeetOJ 681-NextClosestTime', () => {
  describe('nextClosestTime', () => {
    it('should solve the given example 1', () => {
      const input = "19:34";
      const expected = "19:39";
      expect(nextClosestTime(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = "23:59";
      const expected = "22:22";
      expect(nextClosestTime(input)).to.equal(expected);
    });
  });
});
