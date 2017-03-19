import { expect } from 'chai';
import solution from './131-PalindromePartitioning';

describe('LeetOJ 131-PalindromePartitioning', () => {
  describe('solution', () => {
    it('should solve the given example', () => {
      const input = 'aab';
      const expected = [
        ['a', 'a', 'b'],
        ['aa', 'b'],
      ];
      expect(solution(input)).to.eql(expected);
    });
    it('should solve OJ test case', () => {
      const input = 'bb';
      const expected = [
        ['b', 'b'],
        ['bb'],
      ];
      expect(solution(input)).to.eql(expected);
    });
  });
});
