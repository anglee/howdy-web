import { expect } from 'chai';
import solution from './278-FirstBadVersion';

describe('LeetOJ 278-FirstBadVersion', () => {
  describe('solution', () => {
    it('should work with test case 1', () => {
      const n = 1;
      const firstBadVertion = 1;
      const isBadVersion = (i) => i >= firstBadVertion;
      expect(solution(isBadVersion)(n)).to.equal(firstBadVertion);
    });
    it('should work with test case 2', () => {
      const n = 3;
      const firstBadVertion = 3;
      const isBadVersion = (i) => i >= firstBadVertion;
      expect(solution(isBadVersion)(n)).to.equal(firstBadVertion);
    });
    it('should work with test case 3', () => {
      const n = 3;
      const firstBadVertion = 2;
      const isBadVersion = (i) => i >= firstBadVertion;
      expect(solution(isBadVersion)(n)).to.equal(firstBadVertion);
    });
    it('should work with test case 4', () => {
      const n = 3;
      const firstBadVertion = 1;
      const isBadVersion = (i) => i >= firstBadVertion;
      expect(solution(isBadVersion)(n)).to.equal(firstBadVertion);
    });
  });
});
