import { expect } from 'chai';
import isValidSudoku from './036-ValidSudoku';

describe('LeetOJ 036-ValidSudoku', () => {
  describe('isValidSudoku', () => {
    it('should solve the given example', () => {
      const input = [
        ".87654321",
        "2........",
        "3........",
        "4........",
        "5........",
        "6........",
        "7........",
        "8........",
        "9........"].map(row => row.split(''));
      expect(isValidSudoku(input)).to.equal(true);
    });
  });
});
