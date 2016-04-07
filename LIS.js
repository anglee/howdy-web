import _ from 'lodash';

const longer = (a, b) => a.length > b.length ? a : b;
const howdy = (A) => {
  const LISs = [];
  for (let i = 0; i < A.length; i++) {
    LISs.push([A[i]]);
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i]) {
        LISs[i] = longer(LISs[i], [...LISs[j], A[i]]);
      }
    }
  }
  return _.isEmpty(LISs) ? [] : _.maxBy(LISs, it => it.length);
};

export default howdy;
