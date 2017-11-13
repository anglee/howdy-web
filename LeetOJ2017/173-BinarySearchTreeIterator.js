/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator0 = function(root) {
  const stack = [];

  // hint: start by looking at the example:
  // example tree: [A, B, C, D, E, F, G]
  // and move node like following and observe the pattern

  let node = root;

  while (node) {
    stack.push(node);
    node = node.left;
  }

  // node = stack.pop(); // node = D
  //
  // //output node
  //
  // node = node.right; // node = null
  //
  // while (node) {
  //   stack.push(node);
  //   node = node.left;
  // }
  //
  // node = stack.pop(); // node = B
  //
  // //output node
  //
  // node = node.right; // node = E
  //
  // while (node) {
  //   stack.push(node);
  //   node = node.left;
  // }
  //
  // node = stack.pop(); // node = E
  //
  // //output node
  //
  // node = node.right; // node = null
  //
  // while (node) {
  //   stack.push(node);
  //   node = node.left;
  // }
  //
  // node = stack.pop(); // node = A
  //
  // //output node
  //
  // node = node.right; // node = C
  //
  // while (node) {
  //   stack.push(node);
  //   node = node.left;
  // }
  //
  // node = stack.pop(); // node = F
  //
  // //output node
  //
  // node = node.right; // node = null
  //
  // while (node) {
  //   stack.push(node);
  //   node = node.left;
  // }

  this.stack = stack;
};


/**
 * @this BSTIterator0
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator0.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/**
 * @this BSTIterator0
 * @returns {number} - the next smallest number
 */
BSTIterator0.prototype.next = function() {
  let node = this.stack.pop(); // node = D

  //output node
  const ret = node.val;

  node = node.right; // node = null

  while (node) {
    this.stack.push(node);
    node = node.left;
  }

  return ret;
};

/**
 * Your BSTIterator0 will be called like this:
 * var i = new BSTIterator0(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// export default BSTIterator0;

//--------------------------------------------------------------------------------------------------

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.stack = [];
  let node = root;
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  const ret = this.stack.pop();
  let node = ret.right;
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
  return ret.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

export default BSTIterator;

