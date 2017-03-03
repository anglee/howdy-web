class SingleIterator {
  constructor (num) {
    this.num = num;
    this.nextCalled = false;
  }
  hasNext() {
    return !this.nextCalled;
  }
  next() {
    this.nextCalled = true;
    return this.num;
  }
}

class NestedIterator {
  constructor (nestedList) {
    this.iterators = nestedList.map(it => {
      if (it instanceof Array) {
        return new NestedIterator(it);
      } else {
        return new SingleIterator(it);
      }
    });
  }
  hasNext() {
    while (this.iterators.length > 0 && !this.iterators[0].hasNext()) {
      this.iterators.shift();
    }
    return this.iterators.length > 0;
  }
  next() {
    if (!this.hasNext()) { return null; }
    return this.iterators[0].next();
  }
}

export default NestedIterator;