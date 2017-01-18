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

const isArray = o => o instanceof Array;

class SingleElementIterator {
  constructor (it) {
    this.element = it;
  }
  hasNext() {
    return this.element !== null;
  }
  next() {
    const ret = this.element;
    this.element = null;
    return ret;
  }
}

// const createIterator = (it) => {
//   if (!it.isInteger()) {
//     return new NestedIterator(it.getList());
//   } else {
//     return new SingleElementIterator(it.getInteger());
//   }
// };

const createIterator = (it) => {
  if (isArray(it)) {
    return new NestedIterator(it);
  } else {
    return new SingleElementIterator(it);
  }
};
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  if (nestedList.length === 0) {
    this.iterator = null;
  } else {
    this.index = 0;
    this.list = nestedList;
    this.iterator = createIterator(this.list[this.index]);
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  while (this.iterator && !this.iterator.hasNext()) {
    this.index++;
    this.iterator = this.index < this.list.length ? createIterator(this.list[this.index]) : null;
  }
  return this.iterator !== null;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  if (this.hasNext()) {
    return this.iterator.next();
  }
  return null;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

export default NestedIterator;