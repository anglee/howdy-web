import {expect} from 'chai';
import {TreeNode} from './Classic_2-3-Tree';

describe('Classic_2-3-Tree', () => {
  it('empty tree', () => {
    const root = new TreeNode();
    expect(root.getValues()).to.deep.equal([]);

    expect(root.left).to.be.null;
    expect(root.value).to.be.null;
    expect(root.middle).to.be.null;
    expect(root.value1).to.be.null;
    expect(root.right).to.be.null;
    expect(root.isLeaf()).to.be.false;
    expect(root.isEmpty()).to.be.true;
    expect(root.is2Node()).to.be.false;
    expect(root.is3Node()).to.be.false;
  });
  it('single 2-node tree', () => {
    const root = new TreeNode();
    root.insert(9);
    expect(root.getValues()).to.deep.equal([9]);

    expect(root.left).to.be.null;
    expect(root.value).to.equal(9);
    expect(root.middle).to.be.null;
    expect(root.value1).to.be.null;
    expect(root.right).to.be.null;
    expect(root.isLeaf()).to.be.true;
    expect(root.isEmpty()).to.be.false;
    expect(root.is2Node()).to.be.true;
    expect(root.is3Node()).to.be.false;
  });
  it('3-node tree', () => {
    const root = new TreeNode();
    root.insert(9);
    root.insert(5);
    expect(root.getValues()).to.deep.equal([5,9]);

    expect(root.left).to.be.null;
    expect(root.value).to.equal(5);
    expect(root.middle).to.be.null;
    expect(root.value1).to.equal(9);
    expect(root.right).to.be.null;
    expect(root.isLeaf()).to.be.true;
    expect(root.isEmpty()).to.be.false;
    expect(root.is2Node()).to.be.false;
    expect(root.is3Node()).to.be.true;
  });
  it('should handle inserting 9,5,8', () => {
    const root = new TreeNode();
    root.insert(9);
    root.insert(5);
    root.insert(8);
    expect(root.getValues()).to.deep.equal([8]);
    expect(root.left.getValues()).to.deep.equal([5]);
    expect(root.right.getValues()).to.deep.equal([9]);
  });
  it('should handle inserting 9,5,8,3', () => {
    const root = new TreeNode();
    root.insert(9);
    root.insert(5);
    root.insert(8);
    root.insert(3);
    expect(root.getValues()).to.deep.equal([8]);
    expect(root.left.getValues()).to.deep.equal([3,5]);
    expect(root.right.getValues()).to.deep.equal([9]);
  });
  it('should handle inserting 9,5,8,3,2', () => {
    const root = new TreeNode();
    root.insert(9);
    root.insert(5);
    root.insert(8);
    root.insert(3);
    root.insert(2);
    expect(root.getValues()).to.deep.equal([3,8]);
    expect(root.left.getValues()).to.deep.equal([2]);
    expect(root.middle.getValues()).to.deep.equal([5]);
    expect(root.right.getValues()).to.deep.equal([9]);
  });
  it('should handle inserting 9,5,8,3,2,4', () => {
    const root = new TreeNode();
    root.insert(9);
    root.insert(5);
    root.insert(8);
    root.insert(3);
    root.insert(2);
    root.insert(4);
    expect(root.getValues()).to.deep.equal([3,8]);
    expect(root.left.getValues()).to.deep.equal([2]);
    expect(root.middle.getValues()).to.deep.equal([4,5]);
    expect(root.right.getValues()).to.deep.equal([9]);
  });
  it('should handle inserting 9,5,8,3,2,4,7', () => {
    const root = new TreeNode();
    root.insert(9);
    root.insert(5);
    root.insert(8);
    root.insert(3);
    root.insert(2);
    root.insert(4);
    root.insert(7);
    expect(root.getValues()).to.deep.equal([5]);
    expect(root.left.getValues()).to.deep.equal([3]);
    expect(root.right.getValues()).to.deep.equal([8]);
    expect(root.left.left.getValues()).to.deep.equal([2]);
    expect(root.left.right.getValues()).to.deep.equal([4]);
    expect(root.right.left.getValues()).to.deep.equal([7]);
    expect(root.right.right.getValues()).to.deep.equal([9]);
  });
});
