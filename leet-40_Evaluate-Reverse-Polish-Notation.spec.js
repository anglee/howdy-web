import {expect} from 'chai';
import solution from './leet-40_Evaluate-Reverse-Polish-Notation';
describe('leet-40_Evaluate-Reverse-Polish-Notation', () => {
  describe('solution', () => {
    it('should evaluate Reverse Polish Notation', () => {
      const input = ["2", "1", "+", "3", "*"];
      expect(solution(input)).to.equal(9);
    });

    it('should evaluate Reverse Polish Notation', () => {
      const input = ["4", "13", "5", "/", "+"];
      expect(solution(input)).to.equal(6);
    });
  });
});


