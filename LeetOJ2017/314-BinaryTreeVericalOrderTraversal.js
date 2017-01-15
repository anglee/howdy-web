import _ from 'lodash';

import {
  treeDeserializer,
} from '../lib/tree';

const verticalOrder = (head) => {
  const queue = [[head, 0]];
  const positionMap = {};
  while (queue.length > 0) {
    const [node, i] = queue.shift();
    if (_.isNull(node)) {
      continue;
    }
    if (positionMap[i]) {
      positionMap[i].push(node.val);
    } else {
      positionMap[i] = [node.val];
    }
    const {left, right} = node;
    queue.push([left, i - 1]);
    queue.push([right, i + 1]);
  }

  // return _(positionMap)
  //   .keys()
  //   .map(_.toNumber)
  //   .sortBy()
  //   .map(key => positionMap[key])
  //   .value();

  const sortedKeys = Object.keys(positionMap).map(it => parseInt(it)).sort((a, b) => a > b);
  return sortedKeys.map(key => positionMap[key]);
};

export default (A) => verticalOrder(treeDeserializer(A, null));
