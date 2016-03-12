import _ from 'lodash';
import binarySearch from './binarySearch';

const howdy = (sortedArray, sum) => {
  for (let i = 0; i < sortedArray.length - 1; i++) {
    const j = binarySearch(sortedArray.slice(i + 1), sum - sortedArray[i]);
    if (j !== -1) {
      return [i, (i + 1) + j];
    }
  }
};

export default howdy;
