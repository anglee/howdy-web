const getDistance = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) {
  let ret = 0;
  let maxDiff = Number.NEGATIVE_INFINITY;
  for (let nut of nuts) {
    const distToTree = getDistance(nut, tree);
    const distToSquirrel = getDistance(nut, squirrel);
    maxDiff = Math.max(maxDiff, distToTree - distToSquirrel);
    ret += 2 * distToTree;
  }
  return ret - maxDiff;
};

export default minDistance;