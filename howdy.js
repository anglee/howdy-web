import _ from 'lodash';

const solution = (A) => {

  // sort A first
  A = _.sortBy(A);

  let count = 0;

  // use 3 pointers, i, j, k and ensure it so that i < j < k
  // to form triangle, these 3 conditions needs to be true:
  // cond1: A[i] < A[j] + A[k]
  // cond2: A[j] < A[i] + A[k] --> A[i] > A[j] - A[k]
  // cond3: A[k] < A[i] + A[j]
  //
  // since A is sorted and we know i < j, A[i] must < A[j] and thus A[i] < A[j] + A[k] is always true
  // so we don't need to check cond1
  //
  // since A is sorted and we know j < k, thus A[j] must < A[k], so A[j] - A[k] must be negative,
  // and A[i] is positive,and thus A[i] > A[j] - A[k] is always true
  // so we don't need to check cond2
  //
  // so, we only need to make sure cond3 is true when we count the triangle (i,j,k)
  // that is, A[k] < A[i] + A[j]

  // for each possible i, count the triangles
  for (let i of _.range(A.length - 2)) {
    let j = i + 1;
    let k = i + 2;

    while (j < A.length - 1) {

      // push k to the left as much as possible
      while (A[k] < A[i] + A[j] && k < A.length) {
        console.log(`triangle (${A[i]}, ${A[j]}, ${A[k]})`);
        count++;

        if (k === A.length - 1) { // if k is already at the end, we are done
          break;
        }

        k++;
      }

      // at this point we've counted all triangles that use i and j in the while () { k++ } loop above
      // and we are about to move to the next j (as shown as j++ below)
      // note that, here, in a block of each i, k will never move left ever (and thus it's O(n^2) and not O(n^3)

      j++;
      // make sure j > k
      k = Math.max(k, j + 1);
    }
  }


  return count;
};

export default solution;
