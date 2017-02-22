import _ from 'lodash';
import { expect } from 'chai';
import howdy from './Classic_String-Combination';

describe('Classic_String-Combination', () => {
  it('should generate all combination of a string, 1', () => {
    const input = 'a';
    const actual = howdy(input);
    const expected = ['a', ''];
    //console.log('actual', actual);
    //console.log('expected', expected);
    expect(_.difference(expected, actual)).to.empty;
    expect(_.difference(actual, expected)).to.empty;
  });
  it('should generate all combination of a string, 2', () => {
    const input = 'ab';
    const actual = howdy(input);
    const expected = ['ab', 'a', 'b', ''];
    //console.log('actual', actual);
    //console.log('expected', expected);
    expect(_.difference(expected, actual)).to.empty;
    expect(_.difference(actual, expected)).to.empty;
  });
  it('should generate all combination of a string, 3', () => {
    const input = 'abc';
    const actual = howdy(input);
    const expected = [
      '',
      'a', 'b', 'c',
      'ab', 'bc', 'ac',
      'abc'
    ];
    //console.log('actual', actual);
    //console.log('expected', expected);
    expect(_.difference(expected, actual)).to.empty;
    expect(_.difference(actual, expected)).to.empty;
  });
});
