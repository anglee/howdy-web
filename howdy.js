import _ from 'lodash';
import binarySearch from './binarySearch';

const howdy = (sortedArray, sum) => {
  for (let i = 0; i < sortedArray.length - 1; i++) {
    const j = binarySearch(sortedArray, sum - sortedArray[i], i + 1);
    if (j !== -1) {
      return [i, j];
    }
  }
};

export default howdy;
