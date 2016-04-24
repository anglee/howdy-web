import {expect} from 'chai';
import solution from './howdy';

describe('solution', () => {
  it('should work with example', () => {
    const input = [1, 2, 3, 3, 3, 1, 1, 2, 4];
    expect(solution(input)).to.equal(9);
  });
  it('should work with example', () => {
    const input = [1, 2, 3, 4, 5];
    expect(solution(input)).to.equal(9);
  });
  it('should work with example', () => {
    const input = [2, 1, 2, 3, 4, 5];
    expect(solution(input)).to.equal(9);
  });
  it('should work with example', () => {
    const input = [3, 2, 1, 2, 3, 4, 5];
    expect(solution(input)).to.equal(9);
  });
  it('should work with example', () => {
    const input = [4, 3, 2, 1, 2, 3, 4, 5];
    expect(solution(input)).to.equal(9);
  });
  it('should work with example', () => {
    const input = [2, 1, 2];
    expect(solution(input)).to.equal(3);
  });
  it('should work with example', () => {
    const input = [1, 2, 1];
    expect(solution(input)).to.equal(3);
  });
  it('should work with example', () => {
    const input = [6, 2, 5, 4, 5, 1, 6];
    expect(solution(input)).to.equal(12);
  });
});
