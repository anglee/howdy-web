import _ from 'lodash';

const initBuf = (length, initValue) => {
  const ret = [];
  for (var i = 0; i < length; ++i) {
    ret.push(initValue);
  }
  return ret;
};

var minPathSum = function(grid) {
  'use strict';

  // if (grid.length <= 0) {
  //     throw new Error(Invalid);
  // }
  var buf = initBuf(grid[0].length, 0);
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < buf.length; c++) {
      if( r === 0 && c === 0) {
        buf[0] = grid[0][0];
      } else if (r === 0) {
        buf[c] = buf[c - 1] + grid[0][c];
      } else if (c === 0) {
        buf[0] += grid[r][0]
      } else {
        buf[c] = Math.min(buf[c], buf[c - 1]) + grid[r][c];
      }
    }
  }
  return buf[buf.length - 1];
};

export default minPathSum;
