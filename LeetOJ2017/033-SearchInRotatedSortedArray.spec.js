import {expect} from 'chai';
import search from './033-SearchInRotatedSortedArray';

describe('LeetOJ 033-SearchInRotatedSortedArray', () => {

  describe('search', () => {
    it('should solve test case left < mid < right and target is on the left half', () => {
      const rotated = [0, 1, 2, 4, 5, 6, 7];
      const target = 1;
      expect(search(rotated, target)).to.equal(1);
    });
    it('should solve test case left < mid < right and target is on the right half', () => {
      const rotated = [0, 1, 2, 4, 5, 6, 7];
      const target = 5;
      expect(search(rotated, target)).to.equal(4);
    });
    it('should solve test case mid < right < left and target is on the left half', () => {
      const rotated = [6, 7, 0, 1, 2, 4, 5];
      const target = 7;
      expect(search(rotated, target)).to.equal(1);
    });
    it('should solve test case mid < right < left and target is on the right half', () => {
      const rotated = [6, 7, 0, 1, 2, 4, 5];
      const target = 2;
      expect(search(rotated, target)).to.equal(4);
    });
    it('should solve test case right < left < mid and target is on the left half', () => {
      const rotated = [4, 5, 6, 7, 0, 1, 2];
      const target = 5;
      expect(search(rotated, target)).to.equal(1);
    });
    it('should solve test case right < left < mid and target is on the right half', () => {
      const rotated = [4, 5, 6, 7, 0, 1, 2];
      const target = 1;
      expect(search(rotated, target)).to.equal(5);
    });
  });
});
