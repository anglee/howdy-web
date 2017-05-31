import { expect } from 'chai';
import findPermutation from './484-FindPermutation';

describe('LeetOJ 484-Find Permutation', () => {
  describe('findPermutation', () => {
    it('should solve the given example', () => {
      const input = 'I';
      const expected = [1, 2];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve the given example', () => {
      const input = 'DI';
      const expected = [2, 1, 3];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 1', () => {
      const input = 'I';
      const expected = [1, 2];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 2', () => {
      const input = 'D';
      const expected = [2, 1];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 3', () => {
      const input = 'ID';
      const expected = [1, 3, 2];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 4', () => {
      const input = 'DI';
      const expected = [2, 1, 3];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 5', () => {
      const input = 'II';
      const expected = [1, 2, 3];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 6', () => {
      const input = 'DD';
      const expected = [3, 2, 1];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 7', () => {
      const input = 'IID';
      const expected = [1,2,4,3];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 8', () => {
      const input = 'IDI';
      const expected = [1,3,2,4];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 9', () => {
      const input = 'IDD';
      const expected = [1,4,3,2];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 10', () => {
      const input = 'IIDD';
      const expected = [1,2,5,4,3];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 11', () => {
      const input = 'IDID';
      const expected = [1,3,2,5,4];
      expect(findPermutation(input)).to.eql(expected);
    });
    it('should solve test case 12', () => {
      const input = 'IIIDDIIDD';
      const expected = [1,2,3,6,5,4,7,10,9,8];
      expect(findPermutation(input)).to.eql(expected);
    });
  });
});
