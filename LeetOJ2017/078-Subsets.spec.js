import _ from 'lodash';
import { expect } from 'chai';
import subsets from './078-Subsets';


describe('LeetOJ 078-Subsets', () => {

  describe('subsets', () => {
    it('should say "Howdy, World!"', () => {
      const input = [];
      expect(subsets(input)).to.deep.have.all.members([[]]);
    });

    it('should say "Howdy, World!"', () => {
      const input = [1];
      expect(subsets(input)).to.deep.have.all.members([[], [1]]);
    });

    it('should say "Howdy, World!"', () => {
      const input = [1, 2, 3];
      expect(subsets(input)).to.deep.have.all.members([
        [],
        [1],
        [2],
        [3],
        [1, 2],
        [1, 3],
        [2, 3],
        [1, 2, 3],
      ]);
    });
  });
});