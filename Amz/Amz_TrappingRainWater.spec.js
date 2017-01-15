import {expect} from 'chai';
import solution from './Amz_TrappingRainWater';

describe('Amz_TrappingRainWater', () => {
  it('should work', () => {
    const input = [2, 0, 2];
    expect(solution(input)).to.equal(2);
  });
  it('should work', () => {
    const input = [2, 0, 0, 0, 1];
    expect(solution(input)).to.equal(3);
  });
  it('should work', () => {
    const input = [2, 0, 3, 0, 1];
    expect(solution(input)).to.equal(3);
  });
});
