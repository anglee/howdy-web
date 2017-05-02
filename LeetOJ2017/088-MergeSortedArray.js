/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge0 = function(nums1, m, nums2, n) { // time O(m+n), space O(m+n)
  const ret = [];
  let i = 0;
  let j = 0;
  while (i < m || j < n) {
    if (i < m && (j >= n || nums1[i] < nums2[j])) {
      ret.push(nums1[i++]);
    } else {
      ret.push(nums2[j++]);
    }
  }
  nums1.splice(0, nums1.length, ...ret);
  // return ret;
};

var merge1 = function(nums1, m, nums2, n) { // time O(m+n), space O(1)
  const ret = [];
  // push all element in nums1 to the end
  const offset = nums1.length - m;
  if (offset !== 0) {
    for (let i = m - 1; i >= 0; --i) {
      nums1[i + offset] = nums1[i]
    }
  }

  let i1 = offset;
  let i2 = 0;
  let iRet = 0;

  for (let x = 0; x < m+n; ++x) {
    if (i1 < nums1.length && (i2 >= n || nums1[i1] < nums2[i2])) {
      nums1[iRet++] = nums1[i1++];
    } else {
      nums1[iRet++] = nums2[i2++];
    }
  }
  while (iRet < nums1.length) {
    nums1[iRet++] = null;
  }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) { // time O(m+n), space O(1)
  let i = m + n - 1;
  let i1 = m - 1;
  let i2 = n - 1;

  while (i >= 0) {
    if (nums1[i1] > nums2[i2] || i2 < 0) {
      nums1[i--] = nums1[i1--];
    } else {
      nums1[i--] = nums2[i2--];
    }
  }
};

export default merge;