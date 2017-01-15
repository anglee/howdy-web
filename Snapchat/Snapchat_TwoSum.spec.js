import {expect} from 'chai';
import twoSum from './Snapchat_TwoSum';

describe('Snapchat_TwoSum', () => {
  it('should return the 2 indices that sum to an array', () => {
    const array = [2,7,10, 11];
    expect(twoSum(array, 9)).to.deep.equal([0, 1]);
  });
});
