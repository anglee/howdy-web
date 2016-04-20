import {expect} from 'chai';
import solution from './howdy';

describe('howdy', () => {
  it('should work with given sample test', () => {
    const sampleInput = `2
3 12
1 6 9
5 9
3 4 4 4 8`;
    const sampleOutput = `12
9`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
});
