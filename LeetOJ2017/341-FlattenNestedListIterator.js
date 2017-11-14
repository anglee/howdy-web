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

class NestedIterator0 {
  constructor (nestedList) {
    this.iterators = nestedList.map(it => {
      if (it instanceof Array) {
        return new NestedIterator0(it);
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

// export default NestedIterator0;

//--------------------------------------------------------------------------------------------------

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = nestedList.slice().reverse();
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  const peek = (A) => A[A.length - 1];
  while (this.stack.length) {
    if (!Array.isArray(peek(this.stack))) { // is not an array, i.e. it is a number
      return true;
    } else {
      const node = this.stack.pop();
      this.stack.push(...node.slice().reverse());
    }
  }
  return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  if (this.hasNext()) {
    return this.stack.pop();
  }
  return null;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

export default NestedIterator;
