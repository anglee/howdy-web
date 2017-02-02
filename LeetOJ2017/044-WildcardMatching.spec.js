import {expect} from 'chai';
import isMatch from './044-WildcardMatching';

describe('LeetOJ 044-WildcardMatching', () => {
  describe('isMatch', () => {
    describe("should check regular express with '.' and '*'", () => {
      describe('should solve given examples', () => {
        it("'aa', 'a'", () => {
          expect(isMatch('aa', 'a')).to.be.false;
        });
        it("'aa', 'aa'", () => {
          expect(isMatch('aa', 'aa')).to.be.true;
        });
        it("'aaa', 'aa'", () => {
          expect(isMatch('aaa', 'aa')).to.be.false;
        });
        it("'aa', '*'", () => {
          expect(isMatch('aa', '*')).to.be.true;
        });
        it("'aa', 'a*'", () => {
          expect(isMatch('aa', 'a*')).to.be.true;
        });
        it("'ab', '?*'", () => {
          expect(isMatch('ab', '?*')).to.be.true;
        });
        it("'aab', 'c*a*b'", () => {
          expect(isMatch('aab', 'c*a*b')).to.be.false;
        });
      });
    });

    describe('base cases', () => {
      it("'', ''", () => {
        expect(isMatch('', '')).to.be.true;
      });
      it("'a', ''", () => {
        expect(isMatch('a', '')).to.be.false;
      });

      it("'', 'a'", () => {
        expect(isMatch('', 'a')).to.be.false;
      });

      it("'', '?'", () => {
        expect(isMatch('', '?')).to.be.false;
      });
    });


    describe('random test cases', () => {
      it("'aa', 'a*a'", () => {
        expect(isMatch('aa', 'a*a')).to.be.true;
      });
    });

    describe('extreme cases', () => {
      it(`case 1`, () => {
        const s = "baababbaaaaabbababbbbbabaabaabaaabbaabbbbbbaabbbaaabbabbaabaaaaabaabbbaabbabababaaababbaaabaababbabaababbaababaabbbaaaaabbabbabababbbbaaaaaabaabbbbaababbbaabbaabbbbbbbbabbbabababbabababaaababbaaababaabb";
        const p = "*ba***b***a*ab**b***bb*b***ab**aa***baba*b***bb**a*abbb*aa*b**baba**aa**b*b*a****aabbbabba*b*abaaa*aa**b";

        expect(isMatch(s, p)).to.be.false;
      });


      it(`case 2`, () => {
        const s = "abbaaababaaaabaaaaabaabbabababbaaabaaabaabaaaabbababaaaabababaabababbbbaabaabbbbbaababbbbbbbbaaababbbabbbbaabbbababbbabababbaabaaabaaabbbbbabaaaababababbbaabbaabbabbbaabbbaabaabaabbaabbbbbabbaabbbaabbb";
        const p = "***a****a***a*bba*a**aba******b**a*a*b***aa***b*ab*ab*aab*ab*b*abbaa***b**a*bb*b*ab*a*abba**bb*****a";

        expect(isMatch(s, p)).to.be.false;
      });

      it(`case 3`, () => {
        const s = "abbabbbbbabbbababbabbabbbbbbabbaaaaabbbabbbbbbbbababbbabaaaabbabbbbaabaaaabbbaabaaabaaaaaabbbbbaaaabbbbbbabaabbaabaabaaabbbababbbbaaababbbbaaaaabaabbbbaaaabbbbabbabbababaaabbaabbbaaaaabbaaababaabbbaaaa";
        const p = "a*bb**ba***a**bb*bb**babab*ab*a*b**aaaa*a***ba**ba*ab**baab***aba*baa**aa**b*bbbbab***a*a*b*abaab*aba*ba";

        expect(isMatch(s, p)).to.be.false;
      });
    });

  });
});


