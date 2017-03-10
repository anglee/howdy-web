const head = (A) => A[0];
const last = (A) => A[A.length - 1];

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // console.log(height);
  const n = height.length;
  const maxL = [head(height)];
  for (let i = 1; i < n; ++i) {
    maxL.push(Math.max(height[i], last(maxL)));
  }
  // console.log(maxL);
  const maxR = [last(height)];
  for (let i = n - 2; i >= 0; --i) {
    maxR.unshift(Math.max(height[i], head(maxR)));
  }
  // console.log(maxR);
  let ret = 0;
  const debug = [];
  const bounds = [];
  for (let i = 0; i < n; ++i) {
    const bound = Math.min(
      maxL[i - 1] || Number.NEGATIVE_INFINITY,
      maxR[i + 1] || Number.NEGATIVE_INFINITY
    );
    // bounds.push(bound);

    ret += bound > height[i] ? bound - height[i] : 0;
    // debug.push(bound > height[i] ? bound - height[i] : 0);
  }
  // console.log(bounds);
  // console.log(debug);
  return ret;
};

export default trap;