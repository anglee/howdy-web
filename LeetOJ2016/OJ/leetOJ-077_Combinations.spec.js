import {expect} from 'chai';
import combine from './leetOJ-077_Combinations';

const process = (A) => {
  A.forEach(it => { it.sort((a, b) => a - b); });
  A.sort((list1, list2) => {
    if (list1.length !== list2.length) {
      return list1.length - list2.length;
    }
    for (let i = 0; i < list1.length; ++i) {
      if (list1[i] !== list2[i]) {
        return list1[i] - list2[i];
      }
    }
    return 0;
  });
  return A;
};

describe('leetOJ-077_Combinations', () => {
  describe('combine', () => {
    it('should solve the given example', () => {
      const expected = [
        [2,4],
        [3,4],
        [2,3],
        [1,2],
        [1,3],
        [1,4],
      ];
      const actual = combine(4, 2);
      expect(process(actual)).to.eql(process(expected));
    });
  });
});
