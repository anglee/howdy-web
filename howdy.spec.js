import {expect} from 'chai';
import solution from './howdy';

describe('howdy', () => {
  it('should work with given sample test', () => {
    const sampleInput = `3 3
3 2
0 0 0
1 1 0
1 0 0`;
    const sampleOutput = `2`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
});
