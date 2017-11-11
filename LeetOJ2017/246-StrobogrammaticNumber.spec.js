import { expect } from 'chai';
import solution from './246-StrobogrammaticNumber';

describe('LeetOJ 246-StrobogrammaticNumber', () => {
  describe('solution', () => {
    it('should solve the given example 1', () => {
      const input = '69';
      const expected = true;
      expect(solution(input)).to.equal(expected);
    });
    it('should solve the given example 2', () => {
      const input = '88';
      const expected = true;
      expect(solution(input)).to.equal(expected);
    });
    it('should solve the given example 3', () => {
      const input = '818';
      const expected = true;
      expect(solution(input)).to.equal(expected);
    });
    it('should solve the OJ test case', () => {
      const input = '2';
      const expected = false;
      expect(solution(input)).to.equal(expected);
    });
  });
});
