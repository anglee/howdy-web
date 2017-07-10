import { expect } from 'chai';
import generateParenthesis from './022-GenerateParentheses';

describe('LeetOJ 022-GenerateParentheses', () => {
  describe('generateParenthesis', () => {
    it('should solve the given example', () => {
      const result = generateParenthesis(3);
      expect(result).to.have.all.members([
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ]);
    });
    it('should solve test case 2', () => {
      const result = generateParenthesis(2);
      expect(result).to.have.all.members([
        "(())",
        "()()",
      ]);
    });
  });
});
