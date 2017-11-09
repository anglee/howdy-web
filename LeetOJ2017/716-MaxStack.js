/**
 * initialize your data structure here.
 */
var MaxStack = function() {
  this.stack = [];
  this.maxPos = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {

  if (this.maxPos.length === 0) {
    this.maxPos.push(0);
  } else {
    const { length } = this.stack;
    const currentMax = this.stack[this.maxPos[length - 1]];
    const currentMaxPos = this.maxPos[length - 1];
    if (x >= currentMax) {
      this.maxPos.push(length);
    } else {
      this.maxPos.push(currentMaxPos);
    }
  }
  this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  this.maxPos.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  // console.log(this.stack);
  // console.log(this.maxPos);
  const { length } = this.stack;
  return this.stack[this.maxPos[length - 1]];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {

  const { length } = this.stack;
  const maxPos = this.maxPos[length - 1];
  if (maxPos === length - 1) {
    return this.pop();
  }
  const ret = this.stack[maxPos];
  this.stack.splice(maxPos, 1);
  this.maxPos.splice(maxPos, 1);

  let currentMax = Number.NEGATIVE_INFINITY;
  let currentMaxPos = null;
  for (let i = 0; i < this.stack.length; ++i) {
    if (this.stack[i] >= currentMax) {
      currentMax = this.stack[i];
      currentMaxPos = i;
    }
    this.maxPos[i] = currentMaxPos;
  }
  return ret;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = Object.create(MaxStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

export default MaxStack;