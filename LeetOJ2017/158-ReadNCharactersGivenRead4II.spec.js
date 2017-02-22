import { expect } from 'chai';
import solution from './158-ReadNCharactersGivenRead4II';

describe('LeetOJ 158-ReadNCharactersGivenRead4II', () => {

  describe('solution', () => {

    it('should work, test cases 1', () => {
      const input = "ab";
      const read4 = (() => {
        let lastPos = 0;
        return (buf4) => {
          const ret = input.split('').slice(lastPos, lastPos + 4);
          buf4.splice(0, buf4.length, ...ret);
          lastPos += ret.length;
          return ret.length;
        };
      })();
      const read = solution(read4);

      const buf = [];
      read(buf, 1);
      expect(buf.join('')).to.equal('a');

      const buf2 = [];
      read(buf2, 2);
      expect(buf2.join('')).to.equal('b');

    });
    it('should work, test cases 2', () => {
      const input = "12345abcdeABCDE";
      const read4 = (() => {
        let lastPos = 0;
        return (buf4) => {
          const ret = input.split('').slice(lastPos, lastPos + 4);
          buf4.splice(0, buf4.length, ...ret);
          lastPos += ret.length;
          return ret.length;
        };
      })();
      const read = solution(read4);

      const buf = [];
      read(buf, 5);
      expect(buf.join('')).to.equal('12345');

      const buf2 = [];
      read(buf2, 2);
      expect(buf2.join('')).to.equal('ab');

      const buf3 = [];
      read(buf3, 20);
      expect(buf3.join('')).to.equal('cdeABCDE');
    });

    it('should work, test cases 3', () => {
      const input = "12345abcdeABCDE";
      const read4 = (() => {
        let lastPos = 0;
        return (buf4) => {
          const ret = input.split('').slice(lastPos, lastPos + 4);
          buf4.splice(0, buf4.length, ...ret);
          lastPos += ret.length;
          return ret.length;
        };
      })();
      const read = solution(read4);

      const buf = [];
      read(buf, 3);
      expect(buf.join('')).to.equal('123');

      const buf2 = [];
      read(buf2, 9);
      expect(buf2.join('')).to.equal('45abcdeAB');
    });
  });
});
