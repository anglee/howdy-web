/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const goRight = (M, i, j, steps) => {
  'use strict';
  const ret = [];
  for (var s = 0; s < steps; ++s) {
    ret.push(M[j][i + s]);
  }
  return ret;
};
const goDown = (M, i, j, steps) => {
  'use strict';
  const ret = [];
  for (var s = 0; s < steps; ++s) {
    ret.push(M[j + s][i]);
  }
  return ret;
};
const goLeft = (M, i, j, steps) => {
  'use strict';
  const ret = [];
  for (var s = 0; s < steps; ++s) {
    ret.push(M[j][i - s]);
  }
  return ret;
};
const goUp = (M, i, j, steps) => {
  'use strict';
  const ret = [];
  for (var s = 0; s < steps; ++s) {
    ret.push(M[j - s][i]);
  }
  return ret;
};
const traverseLoop = (M, i, j, w, h) => {
  'use strict';

  if (h === 1) {
    return goRight(M, i, j, w);
  }

  if (w === 1) {
    return goDown(M, i, j, h);
  }

  const ret = [];
  // go right
  ret.push(...goRight(M, i, j, w - 1));
  console.log('right', ret);

  // go down
  ret.push(...goDown(M, i + w - 1, j, h - 1));
  console.log('down', ret);

  // go left
  ret.push(...goLeft(M, i + w - 1, j + h - 1, w - 1));
  console.log('left', ret);

  // go up
  ret.push(...goUp(M, i, j + h - 1, h - 1));
  console.log('up', ret);

  return ret;
};

const spiralOrder = (M) => {
  'use strict';
  const m = M.length;
  if (m <= 0) { return []; }

  const n = M[0].length;

  let w = n;
  let h = m;
  let i = 0;
  let j = 0;
  const ret = [];

  while (w >= 1 && h >= 1) {

    ret.push(...traverseLoop(M, i, j, w, h));

    w -= 2;
    h -= 2;
    i += 1;
    j += 1;
  }

  return ret;
};

export default spiralOrder;