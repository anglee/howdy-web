import _ from 'lodash';

const howdy = (r1, r2) => {
  const isNotOverlap = r1.left > r2.right
    || r1.right < r2.left
    || r1.top < r2.bottom
    || r1.bottom > r2.top;
  return !isNotOverlap;
};

export default howdy;
