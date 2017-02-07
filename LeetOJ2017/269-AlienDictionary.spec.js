import {expect} from 'chai';
import alienOrder from './269-AlienDictionary';

describe('LeetOJ 269-AlienDictionary', () => {

  describe('alienOrder', () => {
    it('should solve the given example', () => {
      const dictionary = [
        "wrt",
        "wrf",
        "er",
        "ett",
        "rftt",
      ];
      expect(alienOrder(dictionary)).to.equal('wertf');
    });

    it('should solve single word case', () => {
      const dictionary = [
        "a",
      ];
      expect(alienOrder(dictionary)).to.equal('a');
    });

    it('should solve duplicate words case', () => {
      const dictionary = [
        "z",
        "z",
      ];
      expect(alienOrder(dictionary)).to.equal('z');
    });


    it('should solve the case when there is multiple possible order', () => {
      const dictionary = ["zy", "zx"];
      const ret = alienOrder(dictionary);
      expect(ret.length).to.equal(3);
      expect(ret.indexOf('y') < ret.indexOf('x')).to.be.true;
    });

    it('should return empty string for an input of invalid dictionary, case 1', () => {
      const dictionary = [
        "a",
        "b",
        "eb",
        "ea",
      ];
      expect(alienOrder(dictionary)).to.equal('');
    });

    it('should return empty string for an input of invalid dictionary, case 2', () => {
      const dictionary = ["wrtkj", "wrt"];
      expect(alienOrder(dictionary)).to.equal('');
    });

  });
});