import _ from 'lodash';

const howdy = (n, m) => {
  const buf = _.range(n).map(() => 0);
  buf[0] = 1;
  for (var i = 0; i < m; ++i) {
    for (var j = 1; j < n; ++j) {
      buf[j] += buf[j - 1];
    }
  }
  return _.last(buf);
};

export default howdy;
