import _ from 'lodash';

const twoSum = (array, sum) => {
  const map = new Map();
  array.forEach((item, index) => {
    map.set(item, index);
  });
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (map.has(sum - item)) {
      const j = map.get(sum - item);
      if (i !== j) {
        return [i, j];
      }
    }
  }
  return null;
};

export default twoSum;
