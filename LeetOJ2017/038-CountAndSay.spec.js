import { expect } from 'chai';
import countAndSay from './038-CountAndSay';

describe('LeetOJ 038-CountAndSay', () => {
  describe('countAndSay', () => {
    // 1, 11, 21, 1211, 111221,
    it('should return 1 when n = 1', () => {
      expect(countAndSay(1)).to.equal('1');
    });
    it('should return 11 when n = 2', () => {
      expect(countAndSay(2)).to.equal('11');
    });
    it('should return 21 when n = 3', () => {
      expect(countAndSay(3)).to.equal('21');
    });
    it('should return 1211 when n = 4', () => {
      expect(countAndSay(4)).to.equal('1211');
    });
    it('should return 111221 when n = 5', () => {
      expect(countAndSay(5)).to.equal('111221');
    });
  });
});
