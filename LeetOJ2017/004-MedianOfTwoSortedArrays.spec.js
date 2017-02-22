import { expect } from 'chai';
import findMedianSortedArrays from './004-MedianOfTwoSortedArrays';

describe('LeetOJ 004-MedianOfTwoSortedArrays', () => {
  describe('findMedianSortedArrays', () => {

    it('should work with given example 1', () => {
      const nums1 = [1, 3];
      const nums2 = [2];
      const expectedMedian = 2;

      expect(findMedianSortedArrays(nums1, nums2))
        .to.equal(expectedMedian);
    });

    it('should work with given example 2', () => {
      const nums1 = [1, 2];
      const nums2 = [3, 4];
      const expectedMedian = 2.5; // (2 + 3) / 2

      expect(findMedianSortedArrays(nums1, nums2))
        .to.equal(expectedMedian);
    });


    it('should work with test case empty array', () => {
      const nums1 = [2];
      const nums2 = [];
      const expectedMedian = 2;

      expect(findMedianSortedArrays(nums1, nums2))
        .to.equal(expectedMedian);
    });
  });
});
