import { expect } from 'chai';
import howdy from './FB_Break-Number-Into-Notes';

describe('FB_Break-Number-Into-Notes', () => {
  it('should return ways to break a number into US dollar bills', () => {
    expect(howdy(13)).to.equal(4);
    // because $13 can be broken into bills in the following ways:
    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // [5, 1, 1, 1, 1, 1, 1, 1, 1]
    // [5, 5, 1, 1, 1]
    // [10, 1, 1, 1]
  });

  it('should return ways to break a number into US dollar bills', () => {
    expect(howdy(0)).to.equal(1);
    expect(howdy(1)).to.equal(1);
    expect(howdy(2)).to.equal(1);
    expect(howdy(5)).to.equal(2);
    expect(howdy(6)).to.equal(2);
    expect(howdy(10)).to.equal(4);

    expect(howdy(20)).to.equal(10);
    // 20 can be splitted into
    // case one use of $20: -> 1
    // case zero use of $20:
    //    which can be divided into:
    //        case use of 2 $10: -> 1
    //        case use of 1 $10: -> 3
    //        case use of 0 $10: -> 5
    // in total there are (1 + 1 + 3 + 5) ways
  });
});
