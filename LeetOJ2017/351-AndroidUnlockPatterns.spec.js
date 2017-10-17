import { expect } from 'chai';
import numberOfPatterns from './351-AndroidUnlockPatterns';

describe('LeetOJ 351-AndroidUnlockPatterns', () => {
  describe('numberOfPatterns', () => {
    it('should solve the given example', () => {
      expect(numberOfPatterns(1, 1)).to.equal(9);
    });

    it('should solve the test case 2', () => {
      expect(numberOfPatterns(2, 2)).to.equal(56);
    });

    it('should solve the test case 3', () => {
      expect(numberOfPatterns(3, 3)).to.equal(320);
    });

    it('should solve the test case 4', () => {
      expect(numberOfPatterns(4, 4)).to.equal(1624);
    });

    it('should solve the test case 5', () => {
      expect(numberOfPatterns(5, 5)).to.equal(7152);
    });

    it('should solve the test case 6', () => {
      expect(numberOfPatterns(6, 6)).to.equal(26016);
    });

    it('should solve the test case 7', () => {
      expect(numberOfPatterns(7, 7)).to.equal(72912);
    });

    it('should solve the test case 8', () => {
      expect(numberOfPatterns(8, 8)).to.equal(140704);
    });

    it('should solve the test case 9', () => {
      expect(numberOfPatterns(9, 9)).to.equal(140704);
    });

    it('should solve the OJ test case 1', () => {
      expect(numberOfPatterns(4, 9)).to.equal(389112);
    });
  });
});
