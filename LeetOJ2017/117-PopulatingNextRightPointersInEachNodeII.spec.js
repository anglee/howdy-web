import { expect } from 'chai';
import connect from './117-PopulatingNextRightPointersInEachNodeII';
import { treeDeserializer, findNodeOfValue } from '../lib/tree';

describe('LeetOJ 117-PopulatingNextRightPointersInEachNodeII', () => {

  describe('connect', () => {
    it('should solve the given example', () => {
      const root = treeDeserializer([1, 2, 3, 4, 5, '#', 7]);
      const nodes = [
        null,
        ...[1,2,3,4,5].map(it => findNodeOfValue(root, it)),
        null,
        findNodeOfValue(root, 7),
      ];

      nodes.forEach(node => { if (node) { node.next = null; }});

      connect(root);
      expect(nodes[1].next).to.be.null;
      expect(nodes[2].next).to.equal(nodes[3]);
      expect(nodes[3].next).to.be.null;
      expect(nodes[4].next).to.equal(nodes[5]);
      expect(nodes[5].next).to.equal(nodes[7]);
      expect(nodes[7].next).to.be.null;
    });
  });
});
