import {expect} from 'chai';
import solution from './howdy';

describe('solution', () => {
  it('should work', () => {
    const A = [3,4,4,6,1,4,4];
    const N = 5;
    const result = [3,2,2,4,2];
    expect(solution(N, A)).to.eql(result);
  });
});
