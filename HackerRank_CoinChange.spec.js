import {expect} from 'chai';
import solution from './HackerRank_CoinChange';

describe('howdy', () => {
  it('should work with given sample test', () => {
    const sampleInput = `4 3
1 2 3`;
    const sampleOutput = `4`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
  it('should work with given sample test', () => {
    const sampleInput = `10 4
2 5 3 6`;
    const sampleOutput = `5`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
});
