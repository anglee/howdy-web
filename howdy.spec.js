import {expect} from 'chai';
import NestedIterator from './howdy';

describe('NestedIterator', () => {
  it('should work', () => {
    const nestedList = [[1, 1], 2, [1, 1]];
    var i = new NestedIterator(nestedList), a = [];
    while (i.hasNext()) a.push(i.next());
    console.log(a);
    expect(a).to.deep.equal([1, 1, 2, 1, 1]);
  });
});
