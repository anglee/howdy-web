import { expect } from 'chai';
import canCrossRiver from './Snapchat__FrogRiver';

// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.

/*
 _F                  ______________
 ** * ** *   *    *

 V(t+1) = V(t) + {-1, 0, 1}
 P(t+1) = P(t) + V(t+1)
 V(0) = 0
 P(0) = 0
 V(x) >= 0 for all x
 Victory: Any P(x) >= width of river
 */

describe('Snapchat__FrogRiver', () => {
  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0,1,2,3,4,7,8],
      width: 10
    };
    expect(canCrossRiver(river)).to.equal(true);
  });
  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0,1],
      width: 2
    };
    expect(canCrossRiver(river)).to.equal(true);
  });
  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0],
      width: 2
    };
    expect(canCrossRiver(river)).to.equal(false);
  });

  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0,1,2],
      width: 3
    };
    expect(canCrossRiver(river)).to.equal(true);
  });
  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0,1,2],
      width: 4
    };
    expect(canCrossRiver(river)).to.equal(true);
  });
  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0,1,2],
      width: 5
    };
    expect(canCrossRiver(river)).to.equal(false);
  });
  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0,1,2,3,4],
      width: 7
    };
    expect(canCrossRiver(river)).to.equal(true);
  });
  it('should say "Howdy, World!"', () => {
    const river = {
      stones: [0,1,2,3,4],
      width: 8
    };
    expect(canCrossRiver(river)).to.equal(false);
  });
});
