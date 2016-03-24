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

const solution = (A) => {
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

export default solution;
