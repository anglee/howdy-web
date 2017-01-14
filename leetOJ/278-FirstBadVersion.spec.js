import {expect} from 'chai';
import solution from './278-FirstBadVersion';

describe('LeetOJ 278-FirstBadVersion', () => {
  describe('solution', () => {
    it('should work with test case', () => {
      const input = [1];
      const isBadVersion = (i) => input[i] === 1;

      expect(solution(isBadVersion)(input.length))
        .to.equal(input.indexOf(1));
    });
    it('should work with test case', () => {
      const input = [0, 0, 1];
      const isBadVersion = (i) => input[i] === 1;

      expect(solution(isBadVersion)(input.length))
        .to.equal(input.indexOf(1));
    });
    it('should work with test case', () => {
      const input = [0, 1, 1];
      const isBadVersion = (i) => input[i] === 1;

      expect(solution(isBadVersion)(input.length))
        .to.equal(input.indexOf(1));
    });
    it('should work with test case', () => {
      const input = [1, 1, 1];
      const isBadVersion = (i) => input[i] === 1;

      expect(solution(isBadVersion)(input.length))
        .to.equal(input.indexOf(1));
    });
  });
});
