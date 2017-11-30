import { expect } from 'chai';
import solution from './053-MaximumSubarray';

describe('LeetOJ 053-MaximumSubarray', () => {
  describe('solution', () => {
    it('should solve the given example', () => {
      const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      const expected = 6;
      expect(solution(input)).to.equal(expected);
    });
    it('should solve the OJ test case 1', () => {
      const input = [1];
      const expected = 1;
      expect(solution(input)).to.equal(expected);
    });
    it('should solve the OJ test case 2', () => {
      const input = [-2, 1];
      const expected = 1;
      expect(solution(input)).to.equal(expected);
    });
    it('should solve the OJ test case 3', () => {
      const input = [-1];
      const expected = -1;
      expect(solution(input)).to.equal(expected);
    });
  });
});
