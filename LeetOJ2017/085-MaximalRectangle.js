/**
 * @param {number[]} heights
 * @return {number}
 */
// this from LeetCode 84. Largest Rectangle in Histogram
// check out this video:
// https://www.youtube.com/watch?v=VNbkzsnllsU
var largestRectangleArea = function(heights) {
  if (heights.length <= 0) {
    return 0;
  }

  const peek = A => A[A.length - 1];
  const isEmpty = A => A.length === 0;

  const stack = [{
    h: heights[0],
    pos: 0,
  }];

  let maxArea = 0;
  for (let i = 1; i < heights.length; ++i) {
    const h = heights[i];
    let pos = i;
    while (!isEmpty(stack) && peek(stack).h > h) {
      const it = stack.pop();
      const width = (i - 1) - it.pos + 1;
      pos = it.pos;
      maxArea = Math.max(maxArea, it.h * width);
    }
    if (isEmpty(stack) || h > peek(stack).h) {
      stack.push({ h, pos });
    }
  }
  while (!isEmpty(stack)) {
    const i = heights.length;
    const it = stack.pop();
    const width = (i - 1) - it.pos + 1;
    maxArea = Math.max(maxArea, it.h * width);
  }
  return maxArea;
};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length === 0) { return 0; }
  const w = matrix[0].length;
  let maxRectArea = 0;
  let lastRow = Array(w).fill(0);
  matrix.forEach((row) => {
    const hist = row.map((v, i) => v === '0' ? 0 : lastRow[i] + 1);
    const maxReactAreaOfRow = largestRectangleArea(hist);
    maxRectArea = Math.max(maxRectArea, maxReactAreaOfRow);
    lastRow = hist;
  });
  return maxRectArea;
};

export default maximalRectangle;

