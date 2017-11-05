import { expect } from 'chai';
import { encode, decode } from './271-EncodeAndDecodeStrings';

describe('LeetOJ 271-EncodeAndDecodeStrings', () => {
  describe('encode_decode', () => {
    it('should solve test case', () => {
      const strings = [
        'a',
        'b'
      ];
      expect(decode(encode(strings))).to.eql(strings);
    });
    it('should solve OJ test case 1', () => {
      const strings = [];
      expect(decode(encode(strings))).to.eql(strings);
    });
    it('should solve OJ test case 2', () => {
      const strings = ["WU", "$B"];
      expect(decode(encode(strings))).to.eql(strings);
    });
    it('should solve OJ test case 3', () => {
      const strings = ["WIT8/_Yf", "~Qo[3)Z$", "G0=GlKE3"];
      expect(decode(encode(strings))).to.eql(strings);
    });

  });
});
