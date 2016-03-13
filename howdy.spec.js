import _ from 'lodash';
import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  describe('given sorted integer array in range [0,99] inclusive, return its missing ranges.', () => {
    it('given example', () => {
      const given = [0, 1, 3, 50, 75];
      const expected = ["2", "4->49", "51->74", "76->99"];
      expect(howdy(given)).to.eql(expected);
    });
    it('empty input', () => {
      const given = [];
      const expected = ["0->99"];
      expect(howdy(given)).to.eql(expected);
    });
    it('empty output.', () => {
      const given = _.range(0, 100);
      const expected = [];
      expect(howdy(given)).to.eql(expected);
    });
  });
});
