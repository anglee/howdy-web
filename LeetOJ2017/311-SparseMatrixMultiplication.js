/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply0 = function(A, B) {
  const AB = [];
  for (let rowA = 0; rowA < A.length; rowA++) {
    const rowInAB = [];
    for (let colB = 0; colB < B[0].length; colB++) {
      let val = 0;
      for (let i = 0; i < A[0].length; i++) {
        val += A[rowA][i] * B[i][colB];
      }
      rowInAB.push(val);
    }
    AB.push(rowInAB);
  }

  return AB;
};

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  const AB = Array(A.length).fill().map(() => Array(B[0].length).fill(0));
  for (let rowA = 0; rowA < A.length; rowA++) {
    for (let i = 0; i < A[0].length; i++) {
      if (A[rowA][i] !== 0) {
        for (let colB = 0; colB < B[0].length; colB++) {
          if (B[i][colB] !== 0) {
            AB[rowA][colB] += A[rowA][i] * B[i][colB];
          }
        }
      }
    }
  }

  return AB;
};

export default multiply;