import _ from 'lodash';
import { expect } from 'chai';
import solution from './Amz_AllValidParenthses';


describe('Amz_AllValidParenthses', () => {
  it('should work when n = 1', () => {
    const n = 1;
    const expected = ['()'];
    const actual = solution(n);
    expect(_.difference(expected, actual)).to.be.empty;
    expect(actual.length).to.equal(expected.length);
  });
  it('should work when n = 2', () => {
    const n = 2;
    const expected = ['()()', '(())'];
    const actual = solution(n);
    expect(_.difference(expected, actual)).to.be.empty;
    expect(actual.length).to.equal(expected.length);
  });
  it('should work when n = 3', () => {
    const n = 3;
    const expected = ['()()()', '()(())', '(())()', '((()))', '(()())'];
    const actual = solution(n);
    expect(_.difference(expected, actual)).to.be.empty;
    expect(actual.length).to.equal(expected.length);
  });
});
