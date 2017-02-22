import { expect } from 'chai';
import RandomizedSet from './380-InsertDeleteGetRandomO1';

describe('LeetOJ 380-InsertDeleteGetRandomOJ', () => {

  describe('RandomizedSet', () => {
    it('should solve the given example', () => {
      // Init an empty set.
      const randomSet = new RandomizedSet();

      // Inserts 1 to the set. Returns true as 1 was inserted successfully.
      expect(randomSet.insert(1)).to.be.true;

      // Returns false as 2 does not exist in the set.
      expect(randomSet.remove(2)).to.be.false;

      // Inserts 2 to the set, returns true. Set now contains [1,2].
      expect(randomSet.insert(2)).to.be.true;

      // getRandom should return either 1 or 2 randomly.
      const ret = randomSet.getRandom();
      expect(ret === 1 || ret === 2).to.be.true;

      // Removes 1 from the set, returns true. Set now contains [2].
      expect(randomSet.remove(1)).to.be.true;

      // 2 was already in the set, so return false.
      expect(randomSet.insert(2)).to.be.false;

      // Since 2 is the only number in the set, getRandom always return 2.
      expect(randomSet.getRandom()).to.equal(2);

    });

    it('should solve test case', () => {
      // Init an empty set.
      const randomSet = new RandomizedSet();

      expect(randomSet.insert(0)).to.be.true;
      expect(randomSet.insert(1)).to.be.true;
      expect(randomSet.remove(0)).to.be.true;
      expect(randomSet.insert(2)).to.be.true;
      expect(randomSet.remove(1)).to.be.true;
      expect(randomSet.getRandom()).to.equal(2);

    });
  });
});
