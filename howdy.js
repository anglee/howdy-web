import _ from 'lodash';

const isNotEmpty = (s) => {
  return !!s.length;
};
const peek = (s) => {
  return isNotEmpty(s) ? s[s.length - 1] : null;
};

//const solution = (hist) => {
//  const s = []; // store indices that are possible rectangle lefts
//  let maxArea = 0;
//  [...hist, 0].forEach((h, i) => {
//
//    while (isNotEmpty(s) && hist[peek(s)] > h) {
//      const index = s.pop();
//      const top = peek(s);
//      const rectLeftIndex = top != null ? top + 1 : 0;
//      const rectRightIndex = i - 1;
//      const width = rectRightIndex - rectLeftIndex + 1;
//      const height = hist[index];
//      const area = width * height;
//      maxArea = area > maxArea ? area : maxArea;
//    }
//
//    if (!s.length || hist[peek(s)] <= h) {
//      s.push(i);
//    }
//  });
//  return maxArea;
//};

const getLeftIndices = (hist) => {
  const stack = [];
  const leftIndices = [];
  for (let index = 0; index < hist.length; index++) {
    const height = hist[index];
    while (!_.isEmpty(stack) && peek(stack).height >= height) {
      stack.pop();
    }
    const leftIndex = _.isEmpty(stack) ? 0 : peek(stack).index + 1;
    leftIndices.push(leftIndex);
    stack.push({index, height});
  }
  return leftIndices;
};
const getRightIndices = (hist) => {
  const stack = [];
  const rightIndices = [];
  for (let index = hist.length - 1; index >= 0; index--) {
    const height = hist[index];
    while (!_.isEmpty(stack) && peek(stack).height >= height) {
      stack.pop();
    }
    const rightIndex = _.isEmpty(stack) ? hist.length - 1 : peek(stack).index - 1;
    rightIndices.unshift(rightIndex);
    stack.push({index, height});
  }
  return rightIndices;
};

const solution = (hist) => {
  const leftIndices = getLeftIndices(hist);
  //console.log(leftIndices);
  const rightIndices = getRightIndices(hist);
  //console.log(rightIndices);
  const areas = hist.map((h, i) => {
    const leftIndex = leftIndices[i];
    const rightIndex = rightIndices[i];
    const w = rightIndex - leftIndex + 1;
    const area = h * w;
    return area;
  });
  return Math.max(...areas);
};

export default solution;
