// https://leetcode.com/problems/evaluate-reverse-polish-notation/

import {expect} from 'chai';
import evalRPN from './howdy';

describe('rpn', () => {
  it('should say "Howdy, World!"', () => {
    const input = ["2", "1", "+", "3", "*"];
    expect(evalRPN(input)).to.equal(9);
  });
  it('should say "Howdy, World!"', () => {
    const input = ["4", "13", "5", "/", "+"];
    expect(evalRPN(input)).to.equal(6);
  });
});
