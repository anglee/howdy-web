import { expect } from 'chai';
import convert from './006-ZigZagConversion';

describe('LeetOJ 006-ZigZagConversion', () => {
  describe('convert', () => {
    it('should work with given example', () => {
      const input = 'PAYPALISHIRING';
      const numRows = 3;
      const expected = 'PAHNAPLSIIGYIR';
      expect(convert(input, numRows)).to.equal(expected);
    });

    it('should work with test case', () => {
      const input = 'A';
      const numRows = 1;
      const expected = 'A';
      expect(convert(input, numRows)).to.equal(expected);
    });
  });
});


