import _ from 'lodash';

const howdy = (n) => {
  const buf = [1, 1];
  for (var i = 2; i <=n; ++i) {
    let buf_i = 0;
    for (var j = 0; j < i; ++j) {
      buf_i += buf[j] * buf[i - 1 - j];
    }
    buf.push(buf_i);
  }
  //console.log(buf);
  return buf[n];
};

export default howdy;
