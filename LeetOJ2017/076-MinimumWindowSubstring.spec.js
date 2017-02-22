import { expect } from 'chai';
import minWindow from './076-MinimumWindowSubstring';

describe('LeetOJ 076-MinimumWindowSubstring', () => {

  describe('minWindow', () => {
    it('should work with given example', () => {
      const S = "ADOBECODEBANC";
      const T = "ABC";
      expect(minWindow(S, T)).to.equal('BANC');
    });
    it('should work with test case 1', () => {
      const S = "a";
      const T = "a";
      expect(minWindow(S, T)).to.equal('a');
    });
    it('should work with test case 2', () => {
      const S = "a";
      const T = "aa";
      expect(minWindow(S, T)).to.equal('');
    });
    it('should work with test case 3', () => {
      const S = "bba";
      const T = "ab";
      expect(minWindow(S, T)).to.equal('ba');
    });
  });
});
