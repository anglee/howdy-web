import { expect } from 'chai';
import LRUCache from './146-LRUCache';

describe('LeetOJ 146-LRUCache', () => {

  describe('LRUCache', () => {
    it('should solve the given example', () => {
      const cache = new LRUCache(2 /* capacity */);
      let ret = null;
      cache.put(1, 1);
      cache.put(2, 2);
      ret = cache.get(1);       // returns 1
      expect(ret).to.equal(1);
      ret = cache.put(3, 3);    // evicts key 2
      ret = cache.get(2);       // returns -1 (not found)
      expect(ret).to.equal(-1);
      ret = cache.put(4, 4);    // evicts key 1
      ret = cache.get(1);       // returns -1 (not found)
      expect(ret).to.equal(-1);
      ret = cache.get(3);       // returns 3
      expect(ret).to.equal(3);
      ret = cache.get(4);       // returns 4
      expect(ret).to.equal(4);

    });
  });
});
