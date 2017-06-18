/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea0 = function(heights) { // brute force, Time: O(n^2)
  let maxArea = 0;
  for (let i = 0; i < heights.length; ++i) {
    let minH = heights[i];
    for (let w = 1; i - w + 1 >= 0; ++w) {
      minH = Math.min(minH, heights[i - w + 1]);
      if (minH === 0) {
        break;
      }
      maxArea = Math.max(maxArea, w * minH);
    }
  }

  return maxArea;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
// check out this video:
// https://www.youtube.com/watch?v=VNbkzsnllsU
var largestRectangleArea = function(heights) {
  if (heights.length <= 0) {
    return 0;
  }

  const peek = A => A[A.length - 1];
  const isEmpty = A => A.length === 0;

  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; ++i) {
    const h = heights[i];
    let x = i;
    while (!isEmpty(stack) && peek(stack).h > h) {
      const leftEdge = stack.pop();
      const width = (i - 1) - leftEdge.x + 1;
      maxArea = Math.max(maxArea, leftEdge.h * width);

      x = leftEdge.x;
    }
    if (isEmpty(stack) || h > peek(stack).h) {
      stack.push({ h, x });
    }
  }

  const i = heights.length;
  while (!isEmpty(stack)) {
    const leftEdge = stack.pop();
    const width = (i - 1) - leftEdge.x + 1;
    maxArea = Math.max(maxArea, leftEdge.h * width);
  }
  return maxArea;
};

export default largestRectangleArea;

