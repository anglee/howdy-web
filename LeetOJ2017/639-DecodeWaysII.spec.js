import { expect } from 'chai';
import numDecodings from './639-DecodeWaysII';

describe('LeetOJ 639-DecodeWaysII', () => {
  describe('numDecodings', () => {
    it('should work with given example 1', () => {
      const s = '*';
      expect(numDecodings(s)).to.equal(9);
    });
    it('should work with given example 2', () => {
      const s = '1*';
      expect(numDecodings(s)).to.equal(18);
    });

    it('should work with empty test case', () => {
      const s = '';
      expect(numDecodings(s)).to.equal(0); // by definition
    });

    it("should work with test case '123'", () => {
      const s = '123';
      expect(numDecodings(s)).to.equal(3); // 'LC', 'ABC', 'AW'
    });

    it("should work with test case '103'", () => {
      const s = '103';
      expect(numDecodings(s)).to.equal(1); // 'JC'
    });
  });
});
