/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */

const calculateSlope = (pt1, pt2) => (pt1.y - pt2.y) * 1000 / (pt1.x - pt2.x); // * 1000, hack to improve on precision of big numbers

/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints0 = function(points) { // doesn't handle duplicate points
  if (points.length <= 2) { return points.length; }

  const slopes = new Map();
  for (let i = 0; i < points.length - 1; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      const slope = calculateSlope(points[i], points[j]);
      if (!slopes.has(slope)) {
        slopes.set(slope, []);
      }
      slopes.get(slope).push([i, j]);
    }
  }

  let maxFreq = 0;

  for (let [slope, pairs] of slopes) {
    const mostFrequent = pairs.reduce((freq, [i, j]) => {
      freq.set(i, (freq.get(i) || 0) + 1);
      if (freq.get(i) > maxFreq) { maxFreq = freq.get(i); }
      freq.set(j, (freq.get(j) || 0) + 1);
      if (freq.get(j) > maxFreq) { maxFreq = freq.get(j); }
      return freq;
    }, new Map())
  }
  return maxFreq + 1;
};

const isSamePoint = (pt1, pt2) => pt1.x === pt2.x && pt1.y === pt2.y;

const addToSlopeMap = (slopes, i, slope) => {
  if (!slopes.has(i)) {
    slopes.set(i, new Map());
  }
  const map = slopes.get(i);
  if (!map.has(slope)) {
    map.set(slope, 0);
  }
  map.set(slope, map.get(slope) + 1);
};
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 2) { return points.length; }

  const slopes = new Map();
  const duplicates = new Map(); // count number of points at the same location

  for (let i = 0; i < points.length - 1; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      if (isSamePoint(points[i], points[j])) {
        duplicates.set(i, (duplicates.get(i) || 0) + 1);
        duplicates.set(j, (duplicates.get(j) || 0) + 1);
      } else {
        const slope = calculateSlope(points[i], points[j]);
        addToSlopeMap(slopes, i, slope);
        addToSlopeMap(slopes, j, slope);
      }
    }
  }

  if (slopes.size === 0) {
    return points.length;
  }
  // console.log(Math.max(...slopes.get(0).values()));
  // console.log(duplicates.get(0));

  let maxFreqeuncy = 0;
  for (let i = 0; i < points.length; ++i) {
    const mostFrequentSlope = Math.max(...slopes.get(i).values());
    maxFreqeuncy = Math.max(maxFreqeuncy, mostFrequentSlope + (duplicates.get(i) || 0) + 1);
  }
  return maxFreqeuncy;
};

export default maxPoints;
