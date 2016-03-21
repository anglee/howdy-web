import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  it('should say "Howdy, World!"', () => {
    const A = [{foo: "bar"}, {goo: "mar"}];
    const B = [{foo: "bar"}, {goo: "mar"}];
    expect(A).to.not.equal(B);
    expect(A).to.deep.equal(B);
  });
});
