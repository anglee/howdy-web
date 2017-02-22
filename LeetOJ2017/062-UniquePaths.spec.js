import { expect } from 'chai';
import uniquePaths from './062-UniquePaths';

describe('LeetOJ 062-UniquePaths', () => {
  describe('uniquePaths', () => {
    it('should solve the given example', () => {
      expect(uniquePaths(3, 7)).to.equal(28);
    });
    it('should solve test case (1,1)', () => {
      expect(uniquePaths(1, 1)).to.equal(1);
    });

    it('should solve test case (5,1)', () => {
      expect(uniquePaths(5, 1)).to.equal(1);
    });

    it('should solve test case (1,5)', () => {
      expect(uniquePaths(1, 5)).to.equal(1);
    });

    it('should solve test case (2,5)', () => {
      expect(uniquePaths(2, 5)).to.equal(5);
    });
  });
});
