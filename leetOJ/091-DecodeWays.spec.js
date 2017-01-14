import {expect} from 'chai';
import numDecodings from './091-DecodeWays';

describe('LeetOJ 091-DecodeWays', () => {
  describe('numDecodings', () => {
    it('should work with given example', () => {
      const s = '12';
      expect(numDecodings(s)).to.equal(2); // 'AB' and 'L'
    });

    it('should work with test case', () => {
      const s = '';
      expect(numDecodings(s)).to.equal(0); // by definition
    });

    it('should work with test case', () => {
      const s = '123';
      expect(numDecodings(s)).to.equal(3); // 'LC', 'ABC', 'AW'
    });

    it('should work with test case', () => {
      const s = '103';
      expect(numDecodings(s)).to.equal(1); // 'JC'
    });
  });
});
