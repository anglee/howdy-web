import { expect } from 'chai';
import pathSum from './113-PathSumII';
import {treeDeserializer} from '../lib/tree';

describe('pathSum', () => {
  it('should solve the given example', () => {
    const root = treeDeserializer([
      5, 4, 8, 11, '#', 13, 4, 7, 2, '#', '#', 5, 1
    ]);
    const expected = [
      [5,4,11,2],
      [5,8,4,5],
    ];
    expect(pathSum(root, 22)).to.eql(expected);
  });
});
