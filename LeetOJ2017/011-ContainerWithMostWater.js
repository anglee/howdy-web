/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea0 = function(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const area = (j - i) * Math.min(heights[i], heights[j]);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};

var maxArea = function(heights) {
  let maxArea = 0;
  let l = 0;
  let r = heights.length - 1;
  while (l < r) {
    maxArea = Math.max(maxArea, (r - l) * Math.min(heights[l], heights[r]));

    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};

export default maxArea;
