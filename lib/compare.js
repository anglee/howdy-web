export const sortAA = (AA) => {
  AA.forEach(A => A.sort((a, b) => a - b));
  AA.sort((A1, A2) => {
    if (A1.length !== A2.length) {
      return A1.length - A2.length;
    }
    for (let i = 0; i < A1.length; ++i) {
      if (A1[i] !== A2[i]) {
        return A1[i] - A2[i];
      }
    }
  });
  return AA;
};
