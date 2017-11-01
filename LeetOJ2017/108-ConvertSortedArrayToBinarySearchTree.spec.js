import { expect } from 'chai';
import sortedArrayToBST from './108-ConvertSortedArrayToBinarySearchTree';
import { treeSerializer } from '../lib/tree';

describe('sortedArrayToBST', () => {
  it('should solve the given example', () => {
    const input = [1,2,3];
    const expected = [2,1,3];
    expect(treeSerializer(sortedArrayToBST(input))).to.eql(expected);
  });
});
