import _ from 'lodash';

const LRU = (initialCache, maxLength = 5) => { // element 0 is the newest
  const cache = initialCache.splice(0, 5);
  return {
    add: (item) => {
      cache.unshift(item);
      if (cache.length > maxLength) {
        cache.pop();
      }
    },
    touch: (item) => {
      const index = cache.indexOf(item);
      cache.splice(index, 1);
      cache.unshift(item);
    },
    get: () => {
      return cache.slice();
    }
  };
};

export default LRU;
