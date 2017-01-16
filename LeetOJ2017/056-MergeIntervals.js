/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {

  const points = [];
  intervals.forEach(interval => {
    points.push([interval[0], true]);
    points.push([interval[1], false]);
  });

  points.sort(([posA, isStartA], [posB, isStartB]) => {
    if (posA !== posB) {
      return posA - posB;
    }
    if (isStartA === isStartB) {
      return 0;
    }
    return isStartA ? -1 : 1;
  });

  let layers = 0;
  let ret = [];
  let lastStart = null;

  points.forEach(([pos, isStart]) => {
    if (isStart) {
      layers++;
      if (layers === 1) {
        lastStart = pos;
      }
    } else {
      layers--;
      if (layers === 0) {
        ret.push([lastStart, pos]);
        lastStart = null;
      }
    }
  });

  return ret;
};

export default merge;