/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

export function Interval(start, end) {
  this.start = start;
  this.end = end;
}


const insertPoint = (pts, pt) => {

  const compareFunction = (a, b) => {
    if (a.at !== b.at) { return a.at - b.at; }
    if (a.isStart === b.isStart) { return 0; }
    return a.isStart ? -1 : 1;
  };

  if (pts.length === 0) {
    pts.push(pt);
    return;
  }

  const firstPt = pts[0];
  if (compareFunction(pt, firstPt) <= 0) {
    pts.unshift(pt);
    return;
  }

  const lastPt = pts[pts.length - 1];
  if (compareFunction(pt, lastPt) > 0) {
    pts.push(pt);
    return;
  }

  for (let i = 1; i < pts.length; ++i) {
    const lastPt = pts[i - 1];
    const thisPt = pts[i];

    if (
      compareFunction(pt, lastPt) > 0 &&
      compareFunction(pt, thisPt) <= 0
    ) {
      pts.splice(i, 0, pt);
      return;
    }
  }
};

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  const criticalPoints = [];
  intervals.forEach(({start, end}) => {
    criticalPoints.push({
      at: start,
      isStart: true,
    }, {
      at: end,
      isStart: false,
    });
  });

  insertPoint(criticalPoints, {
    at: newInterval.start,
    isStart: true,
  });
  insertPoint(criticalPoints, {
    at: newInterval.end,
    isStart: false,
  });

  // console.log(`criticalPoints`, criticalPoints);

  const ret = [];
  let overlap = 0;
  let start = null;
  criticalPoints.forEach((pt) => {
    if (pt.isStart) {
      ++overlap;
      if (overlap === 1) {
        start = pt.at;
      }
    } else {
      --overlap;
      if (overlap === 0) {
        ret.push(new Interval(start, pt.at));
      }
    }
  });

  return ret;

};

export default insert;
