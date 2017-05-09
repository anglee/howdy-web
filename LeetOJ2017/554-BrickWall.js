/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const countMap = new Map();
  let max = 0;
  wall.forEach(bricks => {
    let pos = 0;
    for (let i = 0; i < bricks.length - 1; ++i) {
      // skip the last one
      const brick = bricks[i];
      pos += brick;
      if (countMap.has(pos)) {
        countMap.set(pos, countMap.get(pos) + 1);
      } else {
        countMap.set(pos, 1);
      }
      max = Math.max(max, countMap.get(pos));
    }
  });
  return wall.length - max;
};

export default leastBricks;
