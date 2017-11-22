/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const borders = new Map();
  wall.forEach(row => {
    let width = 0;
    for (let i = 0; i < row.length - 1; ++i) {
      width += row[i];
      borders.set(width, (borders.get(width) || 0) + 1);
    }
  });
  return wall.length - Math.max(...borders.values(), 0);
};

export default leastBricks;