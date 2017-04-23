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

const compare = (pt1, pt2) => {
  if (pt1 === null) {
    return -1;
  }
  if (pt1.at !== pt2.at) {
    return pt1.at - pt2.at;
  }
  return pt1.isStart ? -1 : 1;
};

const binarySearch = (pts, pt) => {
  if (pts.length === 0) {
    return 0;
  }

  if (compare(pts[pts.length - 1], pt) < 0) {
    return pts.length;
  }

  let i = 0;
  let j = pts.length - 1;
  while (i !== j) {
    const m = Math.floor((i + j) / 2);
    if (compare(pts[m], pt) >= 0) {
      j = m;
    } else {
      i = m + 1;
    }
  }
  return i;
};

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  const pts = [];
  intervals.forEach(({ start, end }) => {
    pts.push({ at: start, isStart: true }, { at: end, isStart: false });
  });

  const newIntervalStart = { at: newInterval.start, isStart: true };
  const i = binarySearch(pts, newIntervalStart);
  pts.splice(i, 0, newIntervalStart);

  const newIntervalEnd = { at: newInterval.end, isStart: false };
  const j = binarySearch(pts, newIntervalEnd);
  pts.splice(j, 0, newIntervalEnd);

  let overlap = 0;
  let start = null;
  let ret = [];
  pts.forEach(pt => {
    if (pt.isStart) {
      overlap++;
      if (overlap === 1) {
        start = pt.at;
      }
    } else {
      overlap--;
      if (overlap === 0) {
        ret.push({ start, end: pt.at });
      }
    }
  });

  return ret;
};

export default insert;
