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
var findMedianSortedArrays1 = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isTotalLengthOdd = !!(totalLength % 2);
  let p1 = 0;
  let p2 = 0;
  let i = 0;
  let prev = null;
  while (true) {
    let num = null;
    if (nums1[p1] < nums2[p2] || p2 >= nums2.length) {
      num = nums1[p1++];
    } else {
      num = nums2[p2++];
    }
    i++;
    if (isTotalLengthOdd && i === (totalLength + 1) / 2) {
      return num;
    }
    if (!isTotalLengthOdd && i === (totalLength) / 2 + 1) {
      return (num + prev) / 2;
    }
    prev = num;
  }
};

// ===========================================================

var binarySearch = (x, array) => { // return the count of elements in array that are < x, array is sorted

  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0] < x ? 1 : 0;
  }
  if (array[array.length - 1] < x) {
    return array.length;
  }
  const m = Math.floor(array.length / 2);
  if (array[m] >= x) {
    return binarySearch(x, array.slice(0, m));
  } else {
    return (m + 1) + binarySearch(x, array.slice(m + 1));
  }
};

var findKthInSortedArrays = (A, B, k) => {
  if (A.length === 0) {
    return B[k - 1];
  }
  if (B.length === 0) {
    return A[k - 1];
  }
  // make sure A[0] > B[0], if not, swap the roles of A and B
  if (A[0] < B[0]) {
    const temp = A;
    A = B;
    B = temp;
  }
  if (A[0] === B[0]) {
    if (k <= 2) {
      return A[0];
    } else {
      return findKthInSortedArrays(A.slice(1), B.slice(1), k - 2);
    }
  }
  if (k === 1) {
    return B[0];
  }
  const x = binarySearch(A[0], B); // x is the count of elements in B that are < A[0]
  if (x >= k) {
    return B[k - 1]; // 1st is at index 0
  } else {
    return findKthInSortedArrays(A, B.slice(x), k - x);
  }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  'use strict';
  const totalLength = nums1.length + nums2.length;
  const m = Math.ceil(totalLength / 2);
  if (totalLength % 2 === 1) {
    return findKthInSortedArrays(nums1, nums2, m);
  } else {
    console.log(findKthInSortedArrays(nums1, nums2, m));
    console.log(findKthInSortedArrays(nums1, nums2, m + 1));
    return (findKthInSortedArrays(nums1, nums2, m) + findKthInSortedArrays(nums1, nums2, m + 1)) / 2;
  }
};

export default findMedianSortedArrays;
