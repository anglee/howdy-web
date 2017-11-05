/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let ret = Math.ceil(B.length / A.length) + 1;
  const index = Array(ret).fill(A).join('').indexOf(B);
  if (index === -1) {
    return -1;
  }
  if (A.length * ret - (index + B.length) >= A.length) {
    ret--;
  }

  return ret;
};

export default repeatedStringMatch;