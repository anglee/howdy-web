import {expect} from 'chai';
import howdy from './Oscar_Telephone-Number-Words';

const map = { // phone pad number to characters map
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

describe('Oscar_Telephone-Number-Words', () => {
  it('should find all words that are possible given the number', () => {
    expect(howdy([3, 6, 4])).to.eql(['dog', 'fog']);
  });
});
