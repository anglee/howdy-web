/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.mins = [];
};

const lastOf = (A) => {
  return A[A.length - 1];
};
/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.mins.length > 0) {
    this.mins.push(Math.min(x, lastOf(this.mins)));
  } else {
    this.mins.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.mins.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return lastOf(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return lastOf(this.mins);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export default MinStack;