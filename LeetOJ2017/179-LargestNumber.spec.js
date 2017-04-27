import { expect } from 'chai';
import largestNumber from './179-LargestNumber';

describe('largestNumber', () => {
  it('should solve the given example', () => {
    const input = [3, 30, 34, 5, 9];
    const expected = '9534330';
    expect(largestNumber(input)).to.equal(expected);
  });

  it('should solve test case 1', () => {
    const input = [654, 65];
    const expected = '65654';
    expect(largestNumber(input)).to.equal(expected);
  });

  it('should solve test case 2', () => {
    const input = [655, 65];
    const expected = '65655';
    expect(largestNumber(input)).to.equal(expected);
  });

  it('should solve test case 3', () => {
    const input = [656, 65];
    const expected = '65665';
    expect(largestNumber(input)).to.equal(expected);
  });

  it('should solve test case 4', () => {
    const input = [656, 6];
    const expected = '6656';
    expect(largestNumber(input)).to.equal(expected);
  });

  it('should solve test case 5', () => {
    const input = [65456, 654];
    const expected = '65465456';
    expect(largestNumber(input)).to.equal(expected);
  });

  it('should solve OJ test case 1', () => {
    const input = [121, 12];
    const expected = '12121';
    expect(largestNumber(input)).to.equal(expected);
  });

  it('should solve OJ test case 2', () => {
    const input = [0, 0];
    const expected = '0';
    expect(largestNumber(input)).to.equal(expected);
  });
});
