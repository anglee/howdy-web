const findSplitInTail = (head, tail) => {
  let split = null;
  for (let i = 0; i < tail.length; ++i) {
    if (split === null && tail[i] > head) {
      split = i;
    } else if (split !== null && tail[i] < head) {
      return null;
    }
  }
  return split === null ? tail.length : split;
}

/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder0 = function(preorder) {
  if (preorder.length === 0) { return true; }
  const [head, ...tail] = preorder;
  const split = findSplitInTail(head, tail);
  if (split === null) {
    return false;
  }
  return (
    verifyPreorder0(tail.slice(0, split)) &&
    verifyPreorder0(tail.slice(split))
  );
};

//--------------------------------------------------------------------------------------------------


/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder1 = function(preorder) {
  const findSplitInArrayRange = (target, array, start, end) => {
    let split = null;
    for (let i = start; i < end; ++i) {
      if (split === null && array[i] > target) {
        split = i;
      } else if (split !== null && array[i] < target) {
        return null;
      }
    }
    return split === null ? array.length : split;
  };
  const doVerify = (i, j) => {
    if (j - i <= 1) { return true; }
    const head = preorder[i];
    const split = findSplitInArrayRange(head, preorder, i + 1, j);
    if (split === null) {
      return false;
    }
    return (
      doVerify(i + 1, split) &&
      doVerify(split, j)
    );
  };

  return doVerify(0, preorder.length);
};

//--------------------------------------------------------------------------------------------------
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) { // didn't come up with it myself
  let low = Number.NEGATIVE_INFINITY;
  const path = [];
  for (let p of preorder) {
    if (p < low) {
      return false;
    }
    while (path.length > 0 && p > path[path.length - 1]) {
      low = path.pop();
    }
    path.push(p);
  }
  return true;
};

export default verifyPreorder;
