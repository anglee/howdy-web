/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath0 = function(matrix) {
  const h = matrix.length;
  if (h <= 0) { return 0; }
  const w = matrix[0].length;
  if (w <= 0) { return 0; }

  let maxPath = new Set();

  const getId = (x, y) => y * w + x;

  const helper = (x, y, path, last) => {
    if (x < 0 || y < 0 || x >= w || y >= h) {
      return;
    }

    const current = matrix[y][x];
    if (last !== null && current <= last) {
      return;
    }

    const id = getId(x, y);
    if (path.has(id)) {
      return;
    }

    path.add(id);

    if (path.size > maxPath.size) {
      maxPath = new Set(path);
    }

    helper(x - 1, y, path, current);
    helper(x + 1, y, path, current);
    helper(x, y + 1, path, current);
    helper(x, y - 1, path, current);

    path.delete(id);
  };

  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      const id = getId(x, y);
      if (!maxPath.has(id)) {
        const path = new Set();
        helper(x, y, path, null);
      }
    }
  }

  // const debug = true;
  // if (debug === true) {
  //
  //   console.log(
  //     Array.from(maxPath)
  //       .map(id => {
  //         const x = id % w;
  //         const y = Math.floor(id / w);
  //         return { x, y, val: matrix[y][x] };
  //       })
  //       .sort((a, b) => a.val - b.val)
  //   );
  // }

  return maxPath.size;
};

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const h = matrix.length;
  if (h <= 0) { return 0; }
  const w = matrix[0].length;
  if (w <= 0) { return 0; }

  let maxPath = new Set();

  const getId = (x, y) => y * w + x;
  const empty = new Set();

  const maxBySize = (A) => {
    let max = empty;
    A.forEach(it => {
      if (it.size > max.size) {
        max = it;
      }
    });
    return max;
  };

  const cache = new Map();

  const getMaxPathXY = (x, y, last = null) => {
    if (x < 0 || y < 0 || x >= w || y >= h) {
      // console.log(`getMaxPathXY(${x}, ${y}) = empty`);
      return empty;
    }


    const current = matrix[y][x];
    if (last !== null && last >= current) {
      // console.log(`getMaxPathXY(${x}, ${y}) = empty`);
      return empty;
    }

    const id = getId(x, y);
    if (cache.has(id)) {
      return cache.get(id);
    }

    const maxChild = maxBySize([
      getMaxPathXY(x + 1, y, current),
      getMaxPathXY(x - 1, y, current),
      getMaxPathXY(x, y + 1, current),
      getMaxPathXY(x, y - 1, current)
    ]);

    const ret = new Set(maxChild);
    ret.add(id);
    // if (x == 2 && y == 2) {
    //   console.log(`getMaxPathXY(x + 1, y, current)`, getMaxPathXY(x + 1, y, current));
    //   console.log(`getMaxPathXY(x - 1, y, current)`, getMaxPathXY(x - 1, y, current));
    //   console.log(`getMaxPathXY(x, y + 1, current)`, getMaxPathXY(x, y + 1, current));
    //   console.log(`getMaxPathXY(x, y - 1, current)`, getMaxPathXY(x, y - 1, current));
    //
    //   const a = getMaxPathXY(x + 1, y, current);
    //   const b = getMaxPathXY(x - 1, y, current);
    //   const c = getMaxPathXY(x, y + 1, current);
    //   const d = getMaxPathXY(x, y - 1, current);
    //   const temp = maxBySize([a, b, c, d]);
    //   console.log(`maxChild`, temp);
    //
    //
    //   console.log(x, y, ret);
    // }
    cache.set(id, ret);
    return ret;
  };

  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      const id = getId(x, y);
      if (!maxPath.has(id)) {
        const path = getMaxPathXY(x, y);
        if (path.size > maxPath.size) {
          maxPath = path;
        }
      }
    }
  }

  // const debug = true;
  // if (debug === true) {
  //
  //   console.log(
  //     Array.from(maxPath)
  //       .map(id => {
  //         const x = id % w;
  //         const y = Math.floor(id / w);
  //         return { x, y, val: matrix[y][x] };
  //       })
  //       .sort((a, b) => a.val - b.val)
  //   );
  // }

  return maxPath.size;
};

export default longestIncreasingPath;