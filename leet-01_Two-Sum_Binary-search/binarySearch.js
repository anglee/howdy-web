import _ from 'lodash';
// 1,2,3,4,5 (4)
const binarySearch = (array, target, l = 0, r = array.length - 1) => {
  if (l > r) {
    return -1;
  }
  let m = _.floor((l + r) / 2);
  if (array[m] === target) {
    return m;
  } else  if (array[m] < target) {
    return binarySearch(array, target, m + 1, r);
  } else { // array[m] > target
    return binarySearch(array, target, l, m - 1);
  }
};


export default binarySearch;