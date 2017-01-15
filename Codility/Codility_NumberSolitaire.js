import _ from 'lodash';

const solutionR = (A, startIndex) => {

  if (startIndex >= A.length) {
    return Number.NEGATIVE_INFINITY;
  }

  if (startIndex === A.length - 1) {
    return A[A.length - 1];
  }

  const possibleNext = _.range(1, 7).map((k) => {
    return solutionR(A, startIndex + k);
  });

  const maxSum = A[startIndex] + _.max(possibleNext);


  return maxSum;
};

const recursiveSolution = (A) => {
  return solutionR(A, 0);
};

const dynamicProgrammingSolution = (A) => {
  const maxSumAtI = _.range(A.length + 6).map(it => Number.NEGATIVE_INFINITY);

  // from back to front
  maxSumAtI[A.length - 1] = A[A.length - 1];
  for (let i = A.length - 2; i >= 0; --i) {
    maxSumAtI[i] = A[i]
      + _.max(
        _.range(i + 1, i + 7).map((it) => maxSumAtI[it])
      );
  }

  return maxSumAtI[0];
};

//export default recursiveSolution;
export default dynamicProgrammingSolution;
