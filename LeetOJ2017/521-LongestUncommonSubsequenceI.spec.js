import { expect } from 'chai';
import findLUSlength from './521-LongestUncommonSubsequenceI';

describe('LeetOJ 521-LongestUncommonSubsequenceI', () => {
  describe('findLUSlength', () => {
    it('should solve the given example', () => {
      expect(findLUSlength("aba", "cdc")).to.eql(3);
    });
    it('should solve test case', () => {
      expect(findLUSlength("hello", "hell")).to.eql(5);
    });
    it('should solve test case', () => {
      expect(findLUSlength("oh", "ho")).to.eql(2);
    });
    it('should solve test case', () => {
      expect(findLUSlength("ho", "ho")).to.eql(-1);
    });
  });
});
