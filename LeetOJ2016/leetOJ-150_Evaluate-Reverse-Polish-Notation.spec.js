// https://leetcode.com/problems/evaluate-reverse-polish-notation/

import {expect} from 'chai';
import evalRPN from './leetOJ-150_Evaluate-Reverse-Polish-Notation';

describe('leetOJ-150_Evaluate-Reverse-Polish-Notation', () => {
  it('should say "Howdy, World!"', () => {
    const input = ["2", "1", "+", "3", "*"];
    expect(evalRPN(input)).to.equal(9);
  });
  it('should say "Howdy, World!"', () => {
    const input = ["4", "13", "5", "/", "+"];
    expect(evalRPN(input)).to.equal(6);
  });
  it('should say "Howdy, World!"', () => {
    const input = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
    expect(evalRPN(input)).to.equal(22);
  });
});
