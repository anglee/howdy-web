/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue1 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const queue = [];
  while (this.queue1.length > 1) {
    queue.push(this.queue1.shift());
  }
  const ret = this.queue1.shift();
  this.queue1 = queue;
  return ret;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  const queue = [];
  while (this.queue1.length > 1) {
    queue.push(this.queue1.shift());
  }
  const ret = this.queue1.shift();
  queue.push(ret);
  this.queue1 = queue;
  return ret;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

export default MyStack;