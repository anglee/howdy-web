import {expect} from 'chai';
import solution from './howdy';

describe('howdy', () => {
  it('should work with given sample test', () => {
    const sampleInput = `2
abdcghbaabcdij bcda
bbbababaaabbbb ab`;
    const sampleOutput = `12
2 0 8
6 2 3 4 5 6 9`;
    expect(solution(sampleInput)).to.equal(sampleOutput);
  });
});
