import _ from 'lodash';
import {expect} from 'chai';
import howdy from './String-Permutation';

describe('String-Permutation', () => {
  it('should come up with all permutation of a string', () => {
    const input = 'abc';
    const actual = howdy(input);
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    //console.log(actual);
    expect(_.difference(actual, expected)).to.be.empty;
    expect(_.difference(expected, actual)).to.be.empty;
  });
});
