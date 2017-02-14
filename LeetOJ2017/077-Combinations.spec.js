import {expect} from 'chai';
import combine from './077-Combinations';


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

describe('LeetOJ 077-Combinations', () => {

  describe('combine', () => {
    it('should solve the given example', () => {
      const actual = combine(4, 2);
      const expected = [
        [2, 4],
        [3, 4],
        [2, 3],
        [1, 2],
        [1, 3],
        [1, 4],
      ];
      expect(process(actual)).to.eql(process(expected));
    });
    it('should solve test case', () => {
      const actual = combine(1, 1);
      const expected = [[1]];
      expect(process(actual)).to.eql(process(expected));
    });
  });
});
