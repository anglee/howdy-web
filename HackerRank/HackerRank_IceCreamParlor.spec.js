import { expect } from 'chai';
import solution from './HackerRank_IceCreamParlor';
var fs = require('fs');

describe('HackerRank_IceCreamParlor', () => {
  it('should work with test data', () => {
    const input = fs.readFileSync('./HackerRank/HackerRank_IceCreamParlor.test.input').toString();
    const output = fs.readFileSync('./HackerRank/HackerRank_IceCreamParlor.test.output').toString();
    //console.log('output', output);
    const actual = solution(input);
    //console.log('actual', actual);
    expect(actual).to.equal(output);
  });
});
