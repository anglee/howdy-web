import { expect } from 'chai';
import NestedIterator from './leetOJ-341_Flatten-Nested-List-Iterator';

describe('leetOJ-341_Flatten-Nested-List-Iterator', () => {
  it('should work', () => {
    const nestedList = [[1, 1], 2, [1, 1]];
    var i = new NestedIterator(nestedList), a = [];
    while (i.hasNext()) a.push(i.next());
    //console.log(a);
    expect(a).to.deep.equal([1, 1, 2, 1, 1]);
  });
});
