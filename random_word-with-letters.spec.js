import {expect} from 'chai';
import { onlyContainsLetter } from './howdy';

describe('onlyContainsLetter', () => {
  it('`abc` contains only `abc`', () => {
    const word = 'abc';
    const letters = 'abc'.split('');
    expect(onlyContainsLetter(word, letters)).to.be.true;
  });
  it('`ac` contains only `abc`', () => {
    const word = 'ac';
    const letters = 'abc'.split('');
    expect(onlyContainsLetter(word, letters)).to.be.true;
  });
  it('`a` contains only `abc`', () => {
    const word = 'a';
    const letters = 'abc'.split('');
    expect(onlyContainsLetter(word, letters)).to.be.true;
  });
  it('`abcabc` contains only `abc`', () => {
    const word = 'abcabc';
    const letters = 'abc'.split('');
    expect(onlyContainsLetter(word, letters)).to.be.true;
  });
  it('`abcd` does not contains only `abc`', () => {
    const word = 'abcd';
    const letters = 'abc'.split('');
    expect(onlyContainsLetter(word, letters)).to.be.false;
  });
  it('`aah` does not contains only `abc`', () => {
    const word = 'aah';
    const letters = 'abc'.split('');
    expect(onlyContainsLetter(word, letters)).to.be.false;
  });
});
