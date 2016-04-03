import {expect} from 'chai';
import howdy from './Codility_OddOccurrencesInArray';

describe('Codility_OddOccurrencesInArray', () => {
  it('should say "Howdy, World!"', () => {
    expect(howdy([9,3,9,3,9,7,9]))
      .to.equal(7);
  });
});
