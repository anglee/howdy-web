import {expect} from 'chai';
import wallsAndGates from './286-WallsAndGates';

const INF = 2147483647;

describe('LeeOJ 286-WallsAndGates', () => {

  describe('wallsAndGates', () => {
    it('should solve the given example', () => {
      const rooms = [
        [INF, -1, 0, INF],
        [INF, INF, INF, -1],
        [INF, -1, INF, -1],
        [0, -1, INF, INF],
      ];
      const expected = [
        [3, -1, 0, 1],
        [2, 2, 1, -1],
        [1, -1, 2, -1],
        [0, -1, 3, 4]
      ];
      wallsAndGates(rooms);
      expect(rooms).to.eql(expected);
    });
    it('should solve empty input', () => {
      const rooms = [];
      const expected = [];
      wallsAndGates(rooms);
      expect(rooms).to.eql(expected);
    });
    it('should solve case where exits are next each other', () => {
      const rooms = [
        [0, 0],
        [0, 0],
      ];
      const expected = [
        [0, 0],
        [0, 0],
      ];
      wallsAndGates(rooms);
      expect(rooms).to.eql(expected);
    });
  });
});