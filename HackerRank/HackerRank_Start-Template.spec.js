import {expect} from 'chai';
import solution from './HackerRank_Start-Template';

describe('HackerRank_Start-Template', () => {
  it('should work with given sample test', () => {
    const sampleInput = `3
3
5
161`;
    const sampleOutput = `3
5
161`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
});
