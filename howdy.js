import _ from 'lodash';

// bruteforce o(n^2)
const bruteforeceSolution = (A) => {
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let start = 0; start < A.length - 1; start++) {
    let sum = 0;
    for (let end = start; end < A.length; end++) {
      sum += A[end];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

// =======================================================

// divideAndConquerSolution O(nlogn), space: O(logn)
const divideAndConquerSolutionI = (A, l, r) => {
  if (l === r) { // length == 1
    return A[l];
  }

  if (r === l + 1) { // length == 2
    return Math.max(A[l], A[r], A[l] + A[r]);
  }

  const m = Math.floor((l + r) / 2);
  const leftMaxSum = divideAndConquerSolutionI(A, l, m - 1);
  const rightMaxSum = divideAndConquerSolutionI(A, m + 1, r);
  let maxLeftSuffixSum = 0;
  let leftSuffixSum = 0;
  _.range(m - 1, l - 1).forEach((it) => {
    leftSuffixSum += A[it];
    maxLeftSuffixSum = Math.max(maxLeftSuffixSum, leftSuffixSum);
  });
  let maxRightPrefixSum = 0;
  let rightPrefixSum = 0;
  _.range(m + 1, r + 1).forEach((it) => {
    rightPrefixSum += A[it];
    maxRightPrefixSum = Math.max(maxRightPrefixSum, rightPrefixSum);
  });
  const sumWithM = maxLeftSuffixSum + A[m] + maxRightPrefixSum;

  return Math.max(leftMaxSum, sumWithM, rightMaxSum);
};


const divideAndConquerSolution = (A) => {
  if (_.isEmpty(A)) {
    return null;
  }
  return divideAndConquerSolutionI(A, 0, A.length - 1);
};


// =======================================================
// To devise a dynamic programming formula, let us assume that
// we are calculating the maximum sum of subarray that ends at a specific index.
// which is either extending the previous subarray or by itself:
// maxSumOfSubarrayEndAtIndex(i) = Math.max(
//    maxSumOfSubarrayEndAtIndex(i - 1) + A[i],
//    A[i]
// )

const dynamicProgrammingSolution = (A) => { // time: O(n), space: O(n)
  let maxSumOfSubarrayEndAtIndex = [A[0]];
  for (let i = 1; i < A.length; i++) {
    maxSumOfSubarrayEndAtIndex[i] = Math.max(
      maxSumOfSubarrayEndAtIndex[i - 1] + A[i],
      A[i]
    )
  }
  return Math.max(...maxSumOfSubarrayEndAtIndex);
};

const dynamicProgrammingSolution2 = (A) => { // time: O(n), space: O(1)
  let lastSumOfSubarrayEndAtIndex = A[0];
  let maxSumOfSubarrayEndAtIndex = A[0];
  for (let i = 1; i < A.length; i++) {
    const sumOfSubarrayEndAtIndex = Math.max(
      lastSumOfSubarrayEndAtIndex + A[i],
      A[i]
    );
    if (sumOfSubarrayEndAtIndex > maxSumOfSubarrayEndAtIndex) {
      maxSumOfSubarrayEndAtIndex = sumOfSubarrayEndAtIndex;
    }
    lastSumOfSubarrayEndAtIndex = sumOfSubarrayEndAtIndex;
  }
  return maxSumOfSubarrayEndAtIndex;
};

//export default bruteforeceSolution;
//export default divideAndConquerSolution;
//export default dynamicProgrammingSolution;
export default dynamicProgrammingSolution2;
