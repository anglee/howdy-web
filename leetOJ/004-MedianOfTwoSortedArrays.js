/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays0 = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isTotalLengthOdd = !!(totalLength % 2);
  let p1 = 0;
  let p2 = 0;
  let merged = [];
  while (true) {
    if (nums1[p1] < nums2[p2] || p2 >= nums2.length) {
      merged.push(nums1[p1]);
      p1++;
    } else {
      merged.push(nums2[p2]);
      p2++;
    }
    if (isTotalLengthOdd && merged.length === (totalLength + 1) / 2) {
      return merged[merged.length - 1];
    }
    if (!isTotalLengthOdd && merged.length === (totalLength) / 2 + 1) {
      return (merged[merged.length - 1] + merged[merged.length - 2]) / 2;
    }
  }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isTotalLengthOdd = !!(totalLength % 2);
  let p1 = 0;
  let p2 = 0;
  let i = 0;
  let last = null;
  while (true) {
    let last2nd = last;
    if (nums1[p1] < nums2[p2] || p2 >= nums2.length) {
      last = nums1[p1++];
    } else {
      last = nums2[p2++];
    }
    i++;
    if (isTotalLengthOdd && i === (totalLength + 1) / 2) {
      return last;
    }
    if (!isTotalLengthOdd && i === (totalLength) / 2 + 1) {
      return (last + last2nd) / 2;
    }
  }
};

export default findMedianSortedArrays;
