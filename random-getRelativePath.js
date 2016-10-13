import _ from 'lodash';


const getRelativePath = (from, target) => {
  const fromTokens = from.split('/');
  const targetTokens = target.split('/');
  const getFirstDiffIndex = (ts1, ts2) => {
    for (let i = 0; i < Math.min(ts1.length, ts2.length); i++) {
      if (ts1[i] !== ts2[i]) {
        return i;
      }
    }
    return Math.min(ts1.length, ts2.length);
  };
  const firstDiffIndex = getFirstDiffIndex(fromTokens, targetTokens);
  var ret = './';
  for (let i = 0; i < fromTokens.length - firstDiffIndex; i++) {
    ret += "../"
  }
  ret += targetTokens.slice(firstDiffIndex).join('/');
  return ret;
};

export default howdy;
