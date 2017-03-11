import { expect } from 'chai';
import rob from './198-HouseRobber';

describe('LeetOJ 198-HouseRobber', () => {
  describe('rob', () => {
    it('should solve the test case 0', () => {
      const input = [1, 0, 1, 0, 1];
      expect(rob(input)).to.equal(3);
    });
    it('should solve the test case 1', () => {
      const input = [1, 2, 3, 4, 5];
      expect(rob(input)).to.equal(9);
    });

    it('should solve the test case 2', () => {
      const input = [2, 1, 1, 5, 4];
      expect(rob(input)).to.equal(7);
    });

    it('should solve the test case 3', () => {
      const input = [2, 1, 1, 2];
      expect(rob(input)).to.equal(4);
    });
  });
});
