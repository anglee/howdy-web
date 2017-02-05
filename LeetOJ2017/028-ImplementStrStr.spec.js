import {expect} from 'chai';
import strStr from './028-ImplementStrStr';


describe('LeetOJ 028-ImplementStrStr', () => {

  describe('strStr', () => {
    it('should return the index of the first occurrence of needle in haystack', () => {
      const haystack = 'ababcde';
      const needle = 'abc';
      expect(strStr(haystack, needle)).to.equal(2);
    });
    it('should should return -1 if needle is not part of haystack.', () => {
      const haystack = 'ababcde';
      const needle = 'abd';
      expect(strStr(haystack, needle)).to.equal(-1);
    });

    it('should solve test case', () => {
      const haystack = 'abababc';
      const needle = 'abc';
      expect(strStr(haystack, needle)).to.equal(4);
    });
  });
});
