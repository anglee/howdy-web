import _ from 'lodash';

const howdy = (sortedArray, targetSum) => {
  let pLeft = 0;
  let pRight = sortedArray.length - 1;
  while (pLeft < pRight) {
    const sum = sortedArray[pLeft] + sortedArray[pRight];
    if (sum == targetSum) {
      return [pLeft, pRight];
    } else if (sum < targetSum) {
      pLeft++;
    } else { // sum > targetSum
      pRight--;
    }
  }
};

export default howdy;
