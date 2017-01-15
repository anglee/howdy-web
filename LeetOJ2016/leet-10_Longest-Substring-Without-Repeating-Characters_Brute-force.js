import _ from 'lodash';

const howdy = (string) => {
  let ret = '';
  for (let i = 0; i < string.length; i++) {
    const set = new Set();
    let j = i;
    for (; j < string.length; j++) {
      if (set.has(string[j])) {
        break;
      } else {
        set.add(string[j]);
      }
    }
    if (j - i > ret.length) {
      ret = string.substring(i, j);
    }
  }
  return ret;
};

export default howdy;
