const countDs = (sig, i) => {
  let count = 0;
  let x = i + 1;
  while (sig[x] === 'D') {
    ++count;
    ++x;
  }
  return count;
};

const fillRet = (ret, i, count) => {
  for (let x = 0; x <= count; ++ x) {
    ret[i + count - x] = i + x + 1;
  }
  return ret;
};

// iterate from left to right, when coming across an 'I',
// count how many 'D's are following the 'I' (at i),
// use the information of i, and count of D's to fill the range [i, i + count + 1] in the
// result array(ret) with decreasing numbers starting with i + 1,
// and then move to the next 'I'
// and for convenience, if input s starts with 'D', prepend an 'I'
// For example, s = DDDIIDD
// sig = IDDDIIDD <- s prepended with I
// (IDDD)(I)(IDD)
// at the 1st I (i = 0, count of following D's = 3),
// fill ret with [4,3,2,1]
// at the 2nd I, if (i = 4, count of following D's = 0)
// fill ret with [_,_,_,_,5]
// at the 3rd I, if (i = 4, count of following D's = 2)
// fill ret with [_,_,_,_,_,8,7,6]

/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation0 = function(s) {
  const sig = ['I', ...s];
  let i = 0;
  let ret = Array(sig.length);
  while (i < sig.length) {
    const count = countDs(sig, i);
    fillRet(ret, i, count);
    i += count + 1;
  }
  return ret;
};

//--------------------------------------------------------------------------------------------------


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
