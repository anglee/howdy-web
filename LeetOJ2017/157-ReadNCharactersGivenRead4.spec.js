import { expect } from 'chai';
import solution from './157-ReadNCharactersGivenRead4';

describe('LeetOJ 157-ReadNCharactersGivenRead4', () => {

  describe('solution', () => {

    it('should work if file length > n', () => {
      const input = "abc";
      const read4 = (() => {
        let lastPos = 0;
        return (buf4) => {
          const ret = input.split('').slice(lastPos, lastPos + 4);
          buf4.splice(0, buf4.length, ...ret);
          lastPos += ret.length;
          return ret.length;
        };
      })();
      const buf = [];
      const read = solution(read4);
      read(buf, 1);
      expect(buf.join('')).to.equal('a');
    });

    it('should work if file length > n, read4 used more than once', () => {
      const input = "12345abc";
      const read4 = (() => {
        let lastPos = 0;
        return (buf4) => {
          const ret = input.split('').slice(lastPos, lastPos + 4);
          buf4.splice(0, buf4.length, ...ret);
          lastPos += ret.length;
          return ret.length;
        };
      })();
      const buf = [];
      const n = 5;
      const read = solution(read4);
      read(buf, n);
      expect(buf.join('')).to.equal('12345');
    });

    it('should work if n > file length', () => {
      const input = "12345abcde";
      const read4 = (() => {
        let lastPos = 0;
        return (buf4) => {
          const ret = input.split('').slice(lastPos, lastPos + 4);
          buf4.splice(0, buf4.length, ...ret);
          lastPos += ret.length;
          return ret.length;
        };
      })();
      const buf = [];
      const n = 15;
      const read = solution(read4);
      const readCount = read(buf, n);
      expect(buf.join('')).to.equal('12345abcde');
      expect(readCount).to.equal(input.length);
    });
  });
});
