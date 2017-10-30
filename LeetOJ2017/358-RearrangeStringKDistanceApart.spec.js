import { expect } from 'chai';
import rearrangeString from './358-RearrangeStringKDistanceApart';

describe('LeetOJ 358-RearrangeStringKDistanceApart', () => {
  describe('rearrangeString', () => {
    it('should solve the given example 1', () => {
      const s = "aabbcc";
      const k = 3;
      expect(rearrangeString(s, k)).to.equal("abcabc");
    });

    it('should solve the given example 2', () => {
      const s = "aaabc";
      const k = 3;
      expect(rearrangeString(s, k)).to.equal("");
    });
    it('should solve the given example 3', () => {
      const s = "aaadbbcc";
      const k = 2;
      expect(rearrangeString(s, k)).to.equal("abacdbac");
    });
  });
});
