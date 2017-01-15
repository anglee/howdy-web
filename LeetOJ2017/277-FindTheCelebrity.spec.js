import {expect} from 'chai';
import solution from './277-FindTheCelebrity';

describe('LeetOJ 277-FindTheCelebrity', () => {

  describe('solution', () => {
    it('should work when everyone knows each other', () => {
      const knows = () => true;
      expect(solution(knows)(2)).to.equal(-1);
    });
    it('should work when no one knows anyone else', () => {
      const knows = () => false;
      expect(solution(knows)(2)).to.equal(-1);
    });
    it('should there is a celebrity, and he is the first', () => {
      const knows = (a, b) => b === 0; // 0 is the celebrity
      expect(solution(knows)(5)).to.equal(0);
    });
    it('should there is a celebrity, and he is in the middle', () => {
      const knows = (a, b) => b === 2; // 2 is the celebrity
      expect(solution(knows)(5)).to.equal(2);
    });
    it('should there is a celebrity, and he is last', () => {
      const knows = (a, b) => b === 4; // 4 is the celebrity
      expect(solution(knows)(5)).to.equal(4);
    });
    it('should there is no celebrity', () => {
      const knows = (a, b) => {
        return b === 3 || (a === 3 && b === 1);
      };
      expect(solution(knows)(5)).to.equal(-1);
    });

    it('should there is no celebrity', () => {
      const knows = (a, b) => {
        return b === 3 || (a === 3 && b === 4);
      };
      expect(solution(knows)(5)).to.equal(-1);
    });
  });
});
