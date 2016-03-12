import _ from 'lodash';

const howdy = (array, sum) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return [i, j];
      }
    }
  }
};

export default howdy;
