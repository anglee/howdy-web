import {expect} from 'chai';
import minPatches from './howdy';

describe('minPatches', () => {
  it('find the minimum patches needed to fill range [1..n]', () => {
    const nums = [1, 3];
    const n = 6;
    expect(minPatches(nums, n)).to.equal(1);
  });
  it('find the minimum patches needed to fill range [1..n]', () => {
    const nums = [1, 5, 10];
    const n = 20;
    expect(minPatches(nums, n)).to.equal(2);
  });
  it('find the minimum patches needed to fill range [1..n]', () => {
    const nums = [1, 2, 2];
    const n = 5;
    expect(minPatches(nums, n)).to.equal(0);
  });
});
