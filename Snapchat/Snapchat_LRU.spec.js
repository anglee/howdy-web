import { expect } from 'chai';
import LRU from './Snapchat_LRU';

describe('Snapchat_LRU', () => {
  it('should work', () => {
    const cache = LRU([1,2,3,4,5], 7);
    expect(cache.get()).to.deep.equal([1, 2, 3, 4, 5]);
    cache.add(6);
    expect(cache.get()).to.deep.equal([6, 1, 2, 3, 4, 5]);
    cache.add(7);
    expect(cache.get()).to.deep.equal([7, 6, 1, 2, 3, 4, 5]);
    cache.add(8);
    expect(cache.get()).to.deep.equal([8, 7, 6, 1, 2, 3, 4]);
    cache.touch(1);
    expect(cache.get()).to.deep.equal([1, 8, 7, 6, 2, 3, 4]);
  });
});
