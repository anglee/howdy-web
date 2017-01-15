import {expect} from 'chai';
import solution from './Palantir_RainFall';

describe('Palantir_RainFall', () => {
  it('should solve given test 1', () => {
    const input = `3
1 5 2
2 4 7
3 6 9`;
    const output = '7 2';
    expect(solution(input)).to.equal(output);
  });
  it('should solve given test 2', () => {
    const input = `1
10`;
    const output = '1';
    expect(solution(input)).to.equal(output);
  });
  it('should solve given test 3', () => {
    const input = `5
1 0 2 5 8
2 3 4 7 9
3 5 7 8 9
1 2 5 4 2
3 3 5 2 1`;
    const output = '11 7 7';
    expect(solution(input)).to.equal(output);
  });
  it('should solve given test 4', () => {
    const input = `4
0 2 1 3
2 1 0 4
3 3 3 3
5 5 2 1`;
    const output = '7 5 4';
    expect(solution(input)).to.equal(output);
  });
});
