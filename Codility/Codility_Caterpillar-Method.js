import _ from 'lodash';

const solution = (A, s) => {
  let front = 0;
  let back = 0;
  let total = 0;

  while (front < A.length && back <= front) {
    if (total < s) {
      front++;
      total += A[front - 1];
      //console.log(`front moved to ${front}, total is now ${total}`);
    } else if (total > s) {
      total -= A[back];
      back++;
      //console.log(`back moved to ${back}, total is now ${total}`);
    } else {
      return A.slice(back, front);
    }
  }
  return null; // didn't find one
};

export const catepillar = solution;
