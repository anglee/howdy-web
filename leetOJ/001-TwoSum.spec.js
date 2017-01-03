import {expect} from 'chai';
import twoSum from './001-TwoSum';
describe('LeetOJ 001-TwoSum', () => {
  it('twoSum', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const actual = twoSum(nums, target);
    const expected = [0, 1];
    expect(actual).to.eql(expected);
  });
});

