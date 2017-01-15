import {expect} from 'chai';
import minPathSum from './leetOJ-064_Minimum-Path-Sum';

describe('leetOJ-064_Minimum-Path-Sum', () => {
  it('should say "Howdy, World!"', () => {
    const input = [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ];
    expect(minPathSum(input)).to.equal(7);
  });
});
