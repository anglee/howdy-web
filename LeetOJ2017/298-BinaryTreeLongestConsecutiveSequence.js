const longest = (...lists) => {
  let longestList = [];
  for (let list of lists) {
    if (list.length > longestList.length) {
      longestList = list;
    }
  }
  return longestList;
};

const findLongests = (root) => {
  let retStartingAtRoot = [root.val];
  let retNotStartingAtRoot = [];

  if (root.left) {
    const left = findLongests(root.left);
    if (root.val === root.left.val - 1) {
      retStartingAtRoot = [root.val, ...left.retStartingAtRoot];
    } else {
      retNotStartingAtRoot = longest(
        left.retStartingAtRoot,
        left.retNotStartingAtRoot,
      );
    }
  }

  if (root.right) {
    const right = findLongests(root.right);
    if (root.val === root.right.val - 1) {
      retStartingAtRoot = longest(
        retStartingAtRoot,
        [root.val, ...right.retStartingAtRoot]
      );
    } else {
      retNotStartingAtRoot = longest(
        retNotStartingAtRoot,
        right.retStartingAtRoot,
        right.retNotStartingAtRoot,
      );
    }
  }


  return {
    retStartingAtRoot,
    retNotStartingAtRoot,
  };
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive0 = function(root) {
  const {
    retStartingAtRoot,
    retNotStartingAtRoot,
  } = findLongests(root);

  return longest(
    retStartingAtRoot,
    retNotStartingAtRoot
  );
};

//--------------------------------------------------------------------------------------------------


const findMaxLengths = (root) => {
  let maxLengthStartingAtRoot = 1;
  let maxLengthNotStartingAtRoot = 0;

  if (root.left) {
    const left = findMaxLengths(root.left);
    if (root.val === root.left.val - 1) {
      maxLengthStartingAtRoot = left.maxLengthStartingAtRoot + 1;
    } else {
      maxLengthNotStartingAtRoot = Math.max(
        left.maxLengthStartingAtRoot,
        left.maxLengthNotStartingAtRoot,
      );
    }
  }

  if (root.right) {
    const right = findMaxLengths(root.right);
    if (root.val === root.right.val - 1) {
      maxLengthStartingAtRoot = Math.max(
        maxLengthStartingAtRoot,
        right.maxLengthStartingAtRoot + 1
      );
    } else {
      maxLengthNotStartingAtRoot = Math.max(
        maxLengthNotStartingAtRoot,
        right.maxLengthStartingAtRoot,
        right.maxLengthNotStartingAtRoot,
      );
    }
  }

  return {
    maxLengthStartingAtRoot,
    maxLengthNotStartingAtRoot,
  };
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
  if (root === null) {
    return 0;
  }
  const {
    maxLengthStartingAtRoot,
    maxLengthNotStartingAtRoot,
  } = findMaxLengths(root);

  return Math.max(
    maxLengthStartingAtRoot,
    maxLengthNotStartingAtRoot
  );
};

export default longestConsecutive;