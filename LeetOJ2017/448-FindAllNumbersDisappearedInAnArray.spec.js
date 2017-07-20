import { expect } from 'chai';
import findDisappearedNumbers from './448-FindAllNumbersDisappearedInAnArray';

describe('LeetOJ 448-FindAllNumbersDisappearedInAnArray', () => {
  describe('findDisappearedNumbers', () => {
    it('should solve the given example', () => {
      const input = [4, 3, 2, 7, 8, 2, 3, 1];
      const expected = [5, 6];
      expect(findDisappearedNumbers(input)).to.eql(expected);
    });
  });
});
