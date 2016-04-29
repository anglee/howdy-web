import {expect} from 'chai';
import howdy from './Snapchat_CountBST';

describe('Snapchat_CountBST', () => {
  it('should find how many way to construct a BST when given n numbers', () => {
    expect(howdy(2)).to.equal(2);
  });
  it('should find how many way to construct a BST when given n numbers', () => {
    expect(howdy(3)).to.equal(5);
  });
  it('should find how many way to construct a BST when given n numbers', () => {
    expect(howdy(4)).to.equal(14);
  });
});
