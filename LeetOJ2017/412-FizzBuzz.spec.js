import { expect } from 'chai';
import fizzBuzz from './412-FizzBuzz';

describe('LeetOJ 412-FizzBuzz', () => {
  describe('fizzBuzz', () => {
    it('should solve the given example', () => {
      expect(fizzBuzz(15)).to.eql([
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz"
      ]);
    });
  });
});
