import { expect } from 'chai';
import findLUSlength from './522-LongestUncommonSubsequenceII';

describe('LeetOJ 522-LongestUncommonSubsequenceII', () => {
  describe('findLUSlength', () => {
    it('should solve the given example', () => {
      expect(findLUSlength(["aaa", "aaa"])).to.eql(-1);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aaa", "aaa", "bbb"])).to.eql(3);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aaa", "aaa", "bb"])).to.eql(2);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aaa", "aaa", "aa"])).to.eql(-1);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aaa", "aaa", "ab"])).to.eql(2);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aba", "aba", "ba"])).to.eql(-1);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aba", "aba", "aa"])).to.eql(-1);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aba", "aba", "aa", "cc"])).to.eql(2);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aaaa", "aaaa", "bbb", "bbb", "cc"])).to.eql(2);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aaaa", "aaaa", "bbb", "bbb", "bb"])).to.eql(-1);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aaaa", "aaaa", "bbb", "bbb", "aa"])).to.eql(-1);
    });
    it('should solve test case', () => {
      expect(findLUSlength(["aabbcc", "aabbcc", "e", "aabc", "aaabbbccc"])).to.eql(9);
    });
  });
});
