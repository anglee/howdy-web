import _ from 'lodash';

const findMaxNonoverlappingSegments = (A, B) => {
  if (A.length < 2) { return A.length; }
  let end = B[0];
  let count = 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > end) {
      end = B[i];
      count++;
    }
  }
  return count;
};
//const A = [1, 3, 7, 9, 9]; // segment begins
//const B = [5, 6, 8, 9, 10]; // segment ends
//console.log(findMaxNonoverlappingSegments(A, B));

export default findMaxNonoverlappingSegments;
