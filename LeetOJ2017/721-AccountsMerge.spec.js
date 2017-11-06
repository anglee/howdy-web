import { expect } from 'chai';
import accountsMerge from './721-AccountsMerge';

describe('LeetOJ 721-AccountsMerge', () => {
  describe('accountsMerge', () => {
    it('should solve the given example', () => {
      const input = [
        ["John", "johnsmith@mail.com", "john00@mail.com"],
        ["John", "johnnybravo@mail.com"],
        ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
        ["Mary", "mary@mail.com"]
      ];
      const expected = [
        ["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
        ["John", "johnnybravo@mail.com"],
        ["Mary", "mary@mail.com"]
      ];
      const actual = accountsMerge(input);
      expect(actual.length).to.equal(expected.length);
      expect(actual.map(it => it.join('_')))
        .to.have.all.members(expected.map(it => it.join('_')));
    });
    it('should solve OJ test case 1', () => {
      const input = [
        ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
        ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
        ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
        ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
        ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]
      ];
      const expected = [
        ["Alex", "Alex0@m.co", "Alex4@m.co", "Alex5@m.co"],
        ["Ethan", "Ethan0@m.co", "Ethan3@m.co"],
        ["Gabe", "Gabe0@m.co", "Gabe2@m.co", "Gabe3@m.co", "Gabe4@m.co"],
        ["Kevin", "Kevin2@m.co", "Kevin4@m.co"]
      ];
      const actual = accountsMerge(input);
      expect(actual.length).to.equal(expected.length);
      expect(actual.map(it => it.join('_')))
        .to.have.all.members(expected.map(it => it.join('_')));
      // expect(actual.map(it => it.join('_')))
      //   .to.equal(expected.map(it => it.join('_')));
    });
    it('should solve OJ test case 2', () => {
      const input = [
        ["David", "David0@m.co", "David1@m.co"],
        ["David", "David3@m.co", "David4@m.co"],
        ["David", "David4@m.co", "David5@m.co"],
        ["David", "David2@m.co", "David3@m.co"],
        ["David", "David1@m.co", "David2@m.co"]
      ];
      const expected = [
        [
          "David",
          "David0@m.co",
          "David1@m.co",
          "David2@m.co",
          "David3@m.co",
          "David4@m.co",
          "David5@m.co"
        ]
      ];
      const actual = accountsMerge(input);
      // expect(actual.length).to.equal(expected.length);
      // expect(actual.map(it => it.join('_')))
      //   .to.have.all.members(expected.map(it => it.join('_')));
      expect(actual.map(it => it.join('_')))
        .to.eql(expected.map(it => it.join('_')));
    });
  });
});
