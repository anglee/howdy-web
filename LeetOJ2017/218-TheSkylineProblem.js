import Heap from '../lib/FastHeap';

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline0 = function(buildings) {
  const getMaxHeightFromSet = (vs) => {
    let max = 0;
    for (let v of vs) {
      if (max === null || v.y > max) {
        max = v.y;
      }
    }
    return max;
  };

  const criticalPts = [];
  buildings.forEach(([left, right, height]) => {
    const leftPt = {
      x: left,
      y: height,
      isLeft: true,
    };
    const rightPt = {
      x: right,
      y: height,
      isLeft: false,
      matchingLeft: leftPt,
    };
    criticalPts.push(
      leftPt,
      rightPt,
    );
  });

  criticalPts.sort((v1, v2) => {
    if (v1.x !== v2.x) {
      return v1.x - v2.x;
    }
    if (v1.isLeft && v2.isLeft) {
      return v2.y - v1.y;
    }
    if (!v1.isLeft && !v2.isLeft) {
      return v1.y - v2.y;
    }
    if (v1.isLeft) {
      return -1
    }
    return 1;
  });

  const ret = [];
  const currentPts = new Set();
  let lastMaxHeight = null;
  criticalPts.forEach((v) => {
    if (v.isLeft) {
      currentPts.add(v);
    } else {
      currentPts.delete(v.matchingLeft);
    }
    const maxHeight = getMaxHeightFromSet(currentPts);
    if (maxHeight === null || maxHeight !== lastMaxHeight) {
      ret.push([v.x, maxHeight]);
    }
    lastMaxHeight = maxHeight;
  });

  return ret;
};

//
// a detailed (but IMO, not very good) explanation
// https://briangordon.github.io/2014/08/the-skyline-problem.html
//



/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const criticalPts = [];
  buildings.forEach(([left, right, height]) => {
    const leftPt = {
      x: left,
      y: height,
      isLeft: true,
    };
    const rightPt = {
      x: right,
      y: height,
      isLeft: false,
      matchingLeft: leftPt,
    };
    criticalPts.push(
      leftPt,
      rightPt,
    );
  });

  criticalPts.sort((v1, v2) => {
    if (v1.x !== v2.x) {
      return v1.x - v2.x;
    }
    if (v1.isLeft && v2.isLeft) {
      return v2.y - v1.y;
    }
    if (!v1.isLeft && !v2.isLeft) {
      return v1.y - v2.y;
    }
    if (v1.isLeft) {
      return -1
    }
    return 1;
  });

  const ret = [];
  const heap = new Heap([0]);
  let lastMaxHeight = null;
  criticalPts.forEach((v) => {
    if (v.isLeft) {
      // console.log(`at ${v.x}, insert ${v.y}`);
      heap.insert(v.y);
    } else {
      // console.log(`at ${v.x}, delete ${v.matchingLeft.y}`);
      heap.delete(v.matchingLeft.y);
    }
    const maxHeight = heap.peek();
    // console.log(`max = ${maxHeight}, heap = ${heap.A}`);
    if (maxHeight === null || maxHeight !== lastMaxHeight) {
      ret.push([v.x, maxHeight]);
    }
    lastMaxHeight = maxHeight;
  });

  return ret;
};

export default getSkyline;