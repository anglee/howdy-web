import { expect } from 'chai';
import convertBST from './538-ConvertBSTToGreaterTree';
import { treeDeserializer, treeSerializer } from '../lib/tree';

describe('LeetOJ 538-ConvertBSTToGreaterTree', () => {
  describe('convertBST', () => {
    it('should solve the given example', () => {
      const input = treeDeserializer([5, 2, 13]);
      const output = convertBST(input);
      expect(treeSerializer(output)).to.eql([18, 20, 13]);
    });
  });
});
