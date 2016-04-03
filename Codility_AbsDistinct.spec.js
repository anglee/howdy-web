import {expect} from 'chai';
import solution from './Codility_AbsDistinct';

describe('Codility_AbsDistinct', () => {
  it('find number of distinct absolute values of elements', () => {
    const A = [-5, -3, -1, 0, 3, 6];
    expect(solution(A)).to.equal(5);
  });
});
