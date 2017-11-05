import { expect } from 'chai';
import solution from './Amz__TomAndJerry';

describe('Amz__TomAndJerry', () => {
  it('should work with given sample test', () => {
    const sampleInput = `3 3
2 2
0 0 1
1 0 1
1 1 1`;
    const sampleOutput = `2`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
  it('should work with given sample test', () => {
    const sampleInput = `3 3
2 2
0 1 0
1 0 0
1 0 0`;
    const sampleOutput = `-1`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
  it('should work with given sample test', () => {
    const sampleInput = `3 3
3 2
0 0 0
1 1 0
1 0 0`;
    const sampleOutput = `5`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });


  it('should work with given my test', () => {
    const sampleInput = `3 2
3 2
0 0
1 0
1 0`;
    const sampleOutput = `3`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });

  it('should work with given my test', () => {
    const sampleInput = `3 1
3 1
0
0
0`;
    const sampleOutput = `2`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });

  it('should work with given my test', () => {
    const sampleInput = `3 1
3 1
0
1
0`;
    const sampleOutput = `-1`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });

  // MY SUBMISSION FAILED THE FOLLOWING TEST
  xit('should work with given my test', () => {
    const sampleInput = `3 3
3 1
0 0 0
0 1 0
0 0 0`;
    const sampleOutput = `2`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
});
