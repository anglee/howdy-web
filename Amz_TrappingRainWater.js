import _ from 'lodash';

const solution = (array) => { // array all non-negative integers
  let currentMax = 0;
  const maxToTheLeft = _.range(array.length).map(() => 0);
  for (let i = 0; i < array.length; i++) {
    maxToTheLeft[i] = currentMax;
    if (array[i] > currentMax) {
      currentMax = array[i];
    }
  }
  currentMax = 0;
  const maxToTheRight = _.range(array.length).map(() => 0);
  for (let i = array.length - 1; i >= 0; i--) {
    maxToTheRight[i] = currentMax;
    if (array[i] > currentMax) {
      currentMax = array[i];
    }
  }

  return array.map((it, i) => {
    const elev = it;
    const bound = Math.min(maxToTheLeft[i], maxToTheRight[i]);
    if (bound > elev) {
      return bound - elev;
    } else {
      return 0;
    }
  }).reduce((sum, it) => {
    return sum + it;
  }, 0);
};

export default solution;
