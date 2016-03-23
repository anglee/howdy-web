import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  describe('should find merged segments', () => {

    it('should work on the given example', () => {
      const input = [[1,5],[10,15],[5,8],[17,20],[13,18]];
      const output = [[1,8],[10,20]];
      expect(howdy(input)).to.eql(output);
    });

    it('should work in the non-overlapping case', () => {
      const input = [[1,5],[10,15]];
      const output = [[1,5],[10,15]];
      expect(howdy(input)).to.eql(output);
    });
    it('should work in the overlapping case', () => {
      const input = [[1,5],[2,7]];
      const output = [[1,7]];
      expect(howdy(input)).to.eql(output);
    });
    it('should work when one completely contains another', () => {
      const input = [[1,15],[5,10]];
      const output = [[1,15]];
      expect(howdy(input)).to.eql(output);
    });
    it('should work on empty input', () => {
      const input = [];
      const output = [];
      expect(howdy(input)).to.eql(output);
    });
  });
});
