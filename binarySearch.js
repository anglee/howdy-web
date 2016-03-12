import _ from 'lodash';
// 1,2,3,4,5 (4)
const binarySearchInner = (array, target, l, r) => {
  if (l > r) {
    return -1;
  }
  let m = _.floor((l + r) / 2);
  if (array[m] === target) {
    return m;
  } else  if (array[m] < target) {
    return binarySearchInner(array, target, m + 1, r);
  } else { // array[m] > target
    return binarySearchInner(array, target, l, m - 1);
  }
};


export default (sortedArray, target) => {
  //return _.indexOf(sortedArray, target);
  return binarySearchInner(sortedArray, target, 0, sortedArray.length - 1);
};