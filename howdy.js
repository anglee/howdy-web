import _ from 'lodash';

const solution = (A) => {

  // sort A first
  A = _.sortBy(A);

  let count = 0;

  // use 3 pointers, i, j, k and ensure it so that i < j < k
  // to form triangle, these 3 conditions needs to be true:
  // cond1: A[i] < A[j] + A[k]
  // cond2: A[j] < A[i] + A[k] --> A[i] > A[j] - A[k]
  // cond3: A[k] < A[i] + A[j] --> A[i] > A[k] - A[j]
  //
  // since A is sorted and we know j < k, thus A[j] must < A[k], so A[j] - A[k] is negative,
  // and A[i] is positive, so cond2 is always true automatically, we don't need to care about it
  // we only need to make sure cond1 and cond3 are true when we count the triangle (i,j,k)
  // so we need to check:
  // A[i] < A[j] + A[k]
  // A[i] > A[k] - A[j]

  // for each possible i, count the triangles
  for (let i of _.range(A.length - 2)) {
    let j = i + 1;
    let k = i + 2;

    while (k < A.length) {
      if (A[i] < A[j] + A[k] && A[i] > A[k] - A[j]) {
        count++;
        console.log(`triangle (${A[i]}, ${A[j]}, ${A[k]})`);
      }

      // either move j or k
      if (A[i] + A[j] <= A[k] || k === A.length - 1) { // move j if A[i] + A[j] <= A[k] or k cannot be moved
        j++;
        // after j is moved, make sure k is still > j
        if (j === k) {
          k++;
        }
      } else {
        k++;
      }
    }
  }
  return count;
};

export default solution;
