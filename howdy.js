import _ from 'lodash';

export const bruteForceSolution = (A) => { // O(n^3)
  let ret = 0;
  for (let x = 0; x < A.length - 1; x++) {
    for (let y = x + 1; y < A.length; y++) {
      for (let z = y + 1; z < A.length; z++) {
        //console.log(A[x], A[y], A[z]);
        if (A[x] + A[y] > A[z]) {
          ret++;
        } else {
          break;
        }
      }
    }
  }
  return ret;
};




