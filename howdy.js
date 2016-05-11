import _ from 'lodash';

const minPatches = (nums, n) => {
  let count = 0;
  let covered = 0;
  let i = 0;

  while (covered < n) {
    if (i >= nums.length || nums[i] > covered + 1) {
      count++;
      const patch = covered + 1;
      covered = patch + covered;
    } else {
      covered = nums[i] + covered;
      i++;
    }
  }
  return count;
};

export default minPatches;
