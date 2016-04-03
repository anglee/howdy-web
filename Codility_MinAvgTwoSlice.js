import _ from 'lodash';

const bruteForceSolution = (A) => {
  let minAvg = Number.POSITIVE_INFINITY;
  let minAvgI = null;

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += A[k];
      }
      const avg = sum / (j - i + 1);
      if (avg < minAvg) {
        minAvg = avg;
        minAvgI = i;
      }
    }
  }
  return minAvgI;
};

// O(N) solution I came up with myself, not proven to work, but seems to work
const secondTry = (A) => {
  const minAvgEndWithJ = _.range(A.length).map(()=>Number.POSITIVE_INFINITY);
  const theIAtJWhenMinAvg = _.range(A.length).map(() => null);
  let i = 0;
  let sum = A[0];

  for (let j = 1; j < A.length; j++) {
    sum += A[j];

    while (i < j - 1) {
      const avgWithAi = sum / (j - i + 1);
      const sumWithoutAi = sum - A[i];
      const avgWithoutAi = sumWithoutAi / (j - i);
      if (avgWithoutAi < avgWithAi) {
        // drop Ai
        sum -= A[i];
        ++i;
      } else {
        break;
      }
    }
    minAvgEndWithJ[j] = sum / (j - i + 1);
    theIAtJWhenMinAvg[j] = i;
  }

  //console.log('minAvgEndWithJ', minAvgEndWithJ);
  //console.log('theIAtJWhenMinAvg', theIAtJWhenMinAvg);

  let minAvg = Number.POSITIVE_INFINITY;
  let ret = null;
  for (let j = 1; j < A.length; j++) {
    if (minAvgEndWithJ[j] < minAvg) {
      minAvg = minAvgEndWithJ[j];
      ret = theIAtJWhenMinAvg[j];
    }
  }
  return ret;
};

// looked it up on the internet, found:
// https://codesays.com/2014/solution-to-min-avg-two-slice-by-codility/
//The key to solve this task is these two patterns:
//  (1) There must be some slices, with length of two or three, having the
//      minimal average value among all the slices.
//  (2) And all the longer slices with minimal average are built up with
//      these 2-element and/or 3-element small slices.
const solution = (A) => {
  let minAvg = Number.POSITIVE_INFINITY;
  let ret = null;

  // length of 2
  if (A.length >= 2) {
    let sum = A[0];
    for (let i = 0; i < A.length-1; i++) {
      sum += A[i+1];
      const avg = sum / 2;
      if (avg < minAvg) {
        minAvg = avg;
        ret = i;
      }
      sum -= A[i];
    }
  }

  // length of 3
  if (A.length >= 3) {
    let sum = A[0] + A[1];
    for (let i = 0; i < A.length-2; i++) {
      sum += A[i+2];
      const avg = sum / 3;
      if (avg < minAvg) {
        minAvg = avg;
        ret = i;
      }
      sum -= A[i];
    }
  }

  return ret;
};

export default solution;
