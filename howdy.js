import _ from 'lodash';

const howdy = (array, sum) => {
  const map = new Map();

  _.forEach(array, (it, j) => {
    map.set(it, j);
  });

  for (let i = 0; i < array.length; i++) {
    const j = map.get(sum - array[i]);
    if (!_.isUndefined(j)) {
      return [i, j];
    }
  }
};

export default howdy;
