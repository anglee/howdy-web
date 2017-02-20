/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
  const A = [1];
  let lastPos = 0;
  s.split('').forEach((ch, index) => {
    if (ch === 'D') {
      // place immediately to the left of last inserted
      // (i.e. immediate lower than the last inserted)
      A.splice(lastPos, 0, index + 2);
    }
    if (ch === 'I') {
      // place at the end (i.e. becomes the new max)
      A.push(index + 2);
      lastPos = A.length - 1;
    }
  });
  return A;
};

export default findPermutation;
