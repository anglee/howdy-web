import {expect} from 'chai';
import {LinkedHashMap, LRU_Cache} from './Classic_LRU-Cache-LinkedHashMap';

describe('Classic_LRU-Cache-LinkedHashMap', () => {

  describe('LinkedHashMap', () => {
    it('set should work', () => {
      const map = new LinkedHashMap();
      map.set('a', 1);
      map.set('b', 2);
      map.set('c', 3);
      map.set('b', 4);
      //console.log(map.info());
      const keys = map.keys();
      expect(keys).to.deep.equal(['b', 'c', 'a']);
    });
    it('get should work', () => {
      const map = new LinkedHashMap();
      map.set('a', 1);
      map.set('b', 2);
      map.set('c', 3);
      map.set('b', 4);
      //console.log(map.info());
      expect(map.get('b')).to.equal(4);
    });
    it('delete should work', () => {
      const map = new LinkedHashMap();
      map.set('a', 1);
      map.set('b', 2);
      map.set('c', 3);
      map.set('b', 4);
      map.delete('c');
      //console.log(map.info());
      const keys = map.keys();
      expect(keys).to.deep.equal(['b', 'a']);
    });
    it('delete head should work', () => {
      const map = new LinkedHashMap();
      map.set('a', 1);
      map.set('b', 2);
      map.set('c', 3);
      map.set('b', 4);
      map.delete('b');
      //console.log(map.info());
      const keys = map.keys();
      expect(keys).to.deep.equal(['c', 'a']);
    });
    it('delete tail should work', () => {
      const map = new LinkedHashMap();
      map.set('a', 1);
      map.set('b', 2);
      map.set('c', 3);
      map.set('b', 4);
      map.delete('a');
      //console.log(map.info());
      const keys = map.keys();
      expect(keys).to.deep.equal(['b', 'c']);
    });
  });

  describe('LRU_Cache', () => {
    it('should work', () => {
      const cache = new LRU_Cache(2);
      cache.set('a', 1);
      cache.set('b', 2);
      cache.set('c', 3);
      cache.set('d', 4);
      cache.set('d', 5);
      cache.set('c', 6);
      //console.log(cache.info());
      const keys = cache.keys();
      expect(keys).to.deep.equal(['c', 'd']);
    });
  });

});

