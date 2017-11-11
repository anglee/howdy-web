import { expect } from 'chai';
import solution from './259-3SumSmaller';

describe('LeetOJ 259-3SumSmaller', () => {
  describe('solution', () => {
    it('should solve the given example', () => {
      const input = [-2, 0, 1, 3];
      const target = 2;
      const expected = 2;
      expect(solution(input, target)).to.equal(expected);
    });
    it('should solve OJ test case 1', () => {
      const input = [0, 0, 0, 0];
      const target = 0;
      const expected = 0;
      expect(solution(input, target)).to.equal(expected);
    });
    it('should solve OJ test case 2', () => {
      const input = [3, 1, 0, -2];
      const target = 4;
      const expected = 3;
      expect(solution(input, target)).to.equal(expected);
    });
  });
});
