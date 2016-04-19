import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  it('should say "Howdy, World!"', () => {
    expect(howdy).to.equal('Howdy, World!');
  });
});
