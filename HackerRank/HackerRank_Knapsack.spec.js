import { expect } from 'chai';
import solution from './HackerRank_Knapsack';

describe('HackerRank_Knapsack', () => {
  it('should work with given my test', () => {
    const sampleInput = `1
1 1
1`;
    const sampleOutput = `1`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });

  it('should work with given my test 2', () => {
    const sampleInput = `2
1 8
5
2 8
4 5`;
    const sampleOutput = `5
8`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });

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
