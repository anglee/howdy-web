var multiply = function(A, B) {
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

export default multiply;