import {expect} from 'chai';
import binarySearch from './Classic_Binary-Search';

describe('Classic_Binary-Search', () => {
  it('find the index of the first element that is greater than target', () => {
    const A = [1,2,3,4,6];
    const target = 3;
    // 4 is the first element in A that A[i] > 3
    expect(binarySearch(A, target)).to.equal(A.indexOf(4));
  });

  describe('should return -1 when there is no element in A > target', () => {
    it('should work with non-empty A', () => {
      const A = [1,2,3,4];
      const target = 5;
      expect(binarySearch(A, target)).to.equal(-1);
    });
    it('should work with empty A', () => {
      const A = [];
      const target = 5;
      expect(binarySearch(A, target)).to.equal(-1);
    });
  });
});
