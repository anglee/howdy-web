/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const height = obstacleGrid.length;
  if (height < 1) {
    return 0;
  }
  const width = obstacleGrid[0].length;
  if (width < 1) {
    return 0;
  }
  const buffer = Array(width).fill(0);

  if (obstacleGrid[0][0] !== 0) {
    return 0;
  }
  buffer[0] = 1;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (obstacleGrid[row][col] === 0) {
        if (col >= 1) {
          buffer[col] += buffer[col - 1];
        }
      } else {
        buffer[col] = 0;
      }
    }
  }

  return buffer[width - 1];
};

export default uniquePathsWithObstacles;