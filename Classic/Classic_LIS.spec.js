import { expect } from 'chai';
import lis from './Classic_LIS';

const isIncrease = (A) => {
  for (let i = 1; i < A.length; i++) {
    if (A[i] <= A[i - 1]) {
      return false;
    }
  }
  return true;
};

const isSubsequence = (SA, SB) => { // return true if SB is a subsequnce of SA
  if (SB.length > SA.length) { return false; }
  let ia = 0;
  let ib = 0;
  while (ia < SA.length) {
    if (SA[ia] === SB[ib]) {
      ib++;
    }
    ia++;
  }
  if (ib === SB.length) {
    return true;
  }
};

describe('Classic_LIS', () => {
  describe('should find LIS(Longest Increasing Subsequence)', () => {
    it('given example', () => {
      const input = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
      //const expected = [ 0, 4, 6, 9, 13, 15 ];
      const output = lis(input);
      expect(output.length).to.equal(6);
      expect(isIncrease(output)).to.be.true;
      expect(isSubsequence(input, output)).to.be.true;
    });
    it('input strict increase', () => {
      const input = [0, 1, 2, 3];
      const expected = [0, 1, 2, 3];
      const output = lis(input);
      expect(output).to.eql(expected);
    });
    it('input strict decrease', () => {
      const input = [4, 3, 2, 1];
      const expected = [1];
      const output = lis(input);
      expect(output.length).to.equal(1);
      expect(isIncrease(output)).to.be.true;
      expect(isSubsequence(input, output)).to.be.true;
    });
    it('random input', () => {
      const input = [1, 5, 2, 0, 4];
      const expected = [1, 2, 4];
      const output = lis(input);
      expect(output).to.eql(expected);
    });
    it('when output LIS not end at last input element', () => {
      const input = [0, 1, -1, 2, -2, 3, -3];
      const expected = [0, 1, 2, 3];
      const output = lis(input);
      expect(output).to.eql(expected);
    });
    it('when input of length 1', () => {
      const input = [0];
      const expected = [0];
      const output = lis(input);
      expect(output).to.eql(expected);
    });
    it('when input is empty', () => {
      const input = [];
      const expected = [];
      const output = lis(input);
      expect(output).to.eql(expected);
    });
  });
});
