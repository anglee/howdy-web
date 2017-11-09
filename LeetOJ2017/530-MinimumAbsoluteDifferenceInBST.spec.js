import { expect } from 'chai';
import getMinimumDifference from './530-MinimumAbsoluteDifferenceInBST';
import { treeDeserializer } from '../lib/tree';

describe('getMinimumDifference', () => {
  it('should solve the given example', () => {
    const input = treeDeserializer([1, '#', 3, 2]);
    const expected = 1;
    expect(getMinimumDifference(input)).to.equal(expected);
  });
});
