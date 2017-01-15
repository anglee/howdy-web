import {expect} from 'chai';
import howdy from './App_Shortest-Palindrome';
// A palindrome is a string which reads the same forward and backwards.
// You are provided a function shortPalin which accepts a string S.
// You are required to form a palindrome by adding 0 or more characters to the string at any
// location which you find appropriate. Return the minimum number of characters which needs to be
// added to the string to transform it into a palindrome. The section of the program which parses
// the input and displays the output is already written. Your task is to complete the body of the
// function provided, and to return the correct output.

describe('App_Shortest-Palindrome', () => {
  it('should say "Howdy, World!"', () => {
    const input = "abab";
    const expected = 1;
    expect(howdy(input)).to.equal(expected);
    // A palindrome can be obtained by appending an 'a' to the end of the string to form 'ababa'.
  });
  it('should say "Howdy, World!"', () => {
    const input = "abacaba";
    const expected = 0;
    expect(howdy(input)).to.equal(expected);
    // The string is already a palindrome, so no characters need to be added to it
  });
  it('should say "Howdy, World!"', () => {
    const input = "ab";
    const expected = 1;
    expect(howdy(input)).to.equal(expected);
  });
  it('should say "Howdy, World!"', () => {
    const input = "aa";
    const expected = 0;
    expect(howdy(input)).to.equal(expected);
  });
  it('should say "Howdy, World!"', () => {
    const input = "abcd";
    const expected = 3;
    expect(howdy(input)).to.equal(expected);
  });
  it('should say "Howdy, World!"', () => {
    const input = "abcda";
    const expected = 2;
    expect(howdy(input)).to.equal(expected);
    // is the same as input = 'bcd', why?
  });
  it('should say "Howdy, World!"', () => {
    const input = "abcde";
    const expected = 4;
    expect(howdy(input)).to.equal(expected);
  });
});
