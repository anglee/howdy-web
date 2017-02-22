import { expect } from 'chai';
import {
  treeSerializer,
  treeDeserializer,
} from '../lib/tree';

import { serialize, deserialize } from './297-SerializeAndDeserializeBinaryTree';

describe('LeetOJ 297-SerializeAndDeserializeBinaryTree', () => {
  describe('serialize, deserialize', () => {
    it('shoudl work with given example', () => {
      const input = [1, 2, 3, null, null, 4, 5];
      const root = treeDeserializer(input, null);
      const serialized = serialize(root);
      // console.log(serialized);
      const actual = deserialize(serialized);
      // console.log(actual);
      expect(treeSerializer(actual, null)).to.eql(input);
    });
    it('shoudl work with empty test case', () => {
      const input = [];
      const root = treeDeserializer(input, null);
      const serialized = serialize(root);
      // console.log(serialized);
      const actual = deserialize(serialized);
      // console.log(actual);
      expect(treeSerializer(actual, null)).to.eql(input);
    });
    it('shoudl work with test case', () => {
      const input = [1, 2, 3, null, null, 4, 5, 6];
      const root = treeDeserializer(input, null);
      const serialized = serialize(root);
      // console.log(serialized);
      const actual = deserialize(serialized);
      // console.log(actual);
      expect(treeSerializer(actual, null)).to.eql(input);
    });
  });
});
