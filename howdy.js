import _ from 'lodash';


const howdy = (integer) => {
  let ret = 0;
  while (integer) {
    ret = ret * 10 + integer % 10;
    integer = _.floor(integer / 10);
  }
  return ret;
};

export default howdy;
