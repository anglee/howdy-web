import _ from 'lodash';

"use strict";

const getMaxSum = (k, A) => {
  if (k === 0 || _.isEmpty(A)) {
    return 0;
  }
  const head = _.head(A);
  const tail = _.tail(A);
  let maxMaxSum = 0;
  for (let i = 0; head * i <= k; ++i) {
    const maxSum = getMaxSum(k - head * i, tail) + head * i;
    if (maxSum > maxMaxSum) {
      maxMaxSum = maxSum;
    }
  }
  return maxMaxSum;
};

const getMaxSum2 = (k, A) => {
  if (k === 0 || _.isEmpty(A)) {
    return 0;
  }
  let maxMaxSum = 0;
  for (let i = 0; i < A.length; ++i) {
    if (k - A[i] >= 0) {
      const maxSum = getMaxSum2(k - A[i], A) + A[i];
      if (maxSum > maxMaxSum) {
        maxMaxSum = maxSum;
      }
    }
  }
  return maxMaxSum;
};

const getMaxSumByDynamicProgramming = (k, A) => {
  const m = [0]; // m[0] = 0
  for (let i = 1; i <= k; ++i) {
    m[i] = Math.max(...A.map((a) => {
      return i >= a ? m[i - a] + a : 0;
    }));
  }
  return m[k];
};

const processTest = (n, k, A) => {
  //return getMaxSum(k, A);
  //return getMaxSum2(k, A);
  return getMaxSumByDynamicProgramming(k, A);
};

const solution = (input) => {
  const lines = input.split('\n');
  const T = parseInt(lines[0]);
  let output = '';
  for (let i = 0; i < T; i++) {
    const line1 = lines[1 + i * 2].trim();
    const n = parseInt(line1.split(' ')[0]);
    const k = parseInt(line1.split(' ')[1]);
    const line2 = lines[1 + i * 2 + 1].trim();
    const A = line2.split(' ').map((it) => parseInt(it));
    const ret = processTest(n, k, A);

    //console.log(ret);
    output += `${ret}\n`;
  }
  return output.trim();
};

//const sampleInput = `2
//123
//456`;
//console.log(solution(sampleInput));

export default solution;
