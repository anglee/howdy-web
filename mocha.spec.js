import { expect } from 'chai';
import howdy from './howdy';

describe('mocha', () => {
  it('use done() should work', (done) => {
    setTimeout(() => {
      expect("bar").to.equal('bar');
      done();
    }, 10);
  });

  it('return a promise should also work', () => {
    return Promise.resolve("foo")
      .then((it) => {
        expect(it).to.equal('foo');
      });
  });
});
