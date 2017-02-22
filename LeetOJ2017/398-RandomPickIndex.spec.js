import { expect } from 'chai';
import Solution from './398-RandomPickIndex';


describe('LeetOJ 398-RandomPickIndex', () => {
  describe('Solution', () => {
    it('should solve the given example', () => {
      const nums = [1, 2, 3, 3, 3];
      const solution = new Solution(nums);
      const index = solution.pick(3);
      expect(
        index === 2 ||
        index === 3 ||
        index === 4
      ).to.be.true;

      expect(solution.pick(1)).to.equal(0);
    });
  });
});