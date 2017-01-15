import {expect} from 'chai';
import solution from './HackerRank_MissingNumbers';
var fs = require('fs');

describe('HackerRank_MissingNumbers', () => {
  it('should work with test data', () => {
    const input = fs.readFileSync('./HackerRank/HackerRank_MissingNumbers.test.input').toString();
    const output = fs.readFileSync('./HackerRank/HackerRank_MissingNumbers.test.output').toString();
    //console.log('output', output);
    const actual = solution(input);
    //console.log('actual', actual);
    expect(actual).to.equal(output);
  });

  it('should work with test3 data', () => {
    const input = fs.readFileSync('./HackerRank/HackerRank_MissingNumbers.test3.input').toString();
    const output = fs.readFileSync('./HackerRank/HackerRank_MissingNumbers.test3.output').toString();
    //console.log('output', output);
    const actual = solution(input);
    //console.log('actual', actual);
    expect(actual).to.equal(output);
  });
});
