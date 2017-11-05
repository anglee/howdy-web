import { expect } from 'chai';
import sortStrings from './sortString';

describe('sortStrings', () => {

  it('should solve the given example 1', () => {
    const input = ['2', '.2', '-1', '-2.4'];
    const expected = ['-2.4', '-1', '.2', '2'];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve the given example 2', () => {
    const input = ["2016/10/10", "2017-01-01", "2016-10-12"];
    const expected = ["2016/10/10", "2016-10-12", "2017-01-01"];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve the given example 3', () => {
    const input = ["Watermelon", "Apple", "bacon"];
    const expected = ["Apple", "bacon", "Watermelon"];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve the given example 4', () => {
    const input = ["abc123", "def45", "abc45"];
    const expected = ["abc45", "abc123", "def45"];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve the given example 5', () => {
    const input = ["Ended on 2016-01-02", "started on 2016-01-02", "ended ON 2017-02-05", "ended on 2017-01-05"];
    const expected = ["Ended on 2016-01-02", "ended on 2017-01-05", "ended ON 2017-02-05", "started on 2016-01-02"];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve the given example 6', () => {
    const input = ["a1", "a2016-01-01", "a3"];
    const expected = ["a1", "a3", "a2016-01-01"];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve test case 1', () => {
    const input = ['-2', '-1', '-2.1'];
    const expected = ['-2.1', '-2', '-1'];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve test case 2', () => {
    const input = ['apple-2', 'apple-1', 'apple-2.1', 'apple-3.1', 'apple-3'];
    const expected = ['apple-1', 'apple-2', 'apple-2.1', 'apple-3', 'apple-3.1'];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve test case 3', () => {
    const input = ['2010/01/01-2', '2010/01/01-1', '2010/01/01-2.1'];
    const expected = ['2010/01/01-1', '2010/01/01-2', '2010/01/01-2.1'];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve test case 4', () => {
    const input = ['2010/01/01-2e', '2010/01/01-1e', '2010/01/01-2.1'];
    const expected = ['2010/01/01-1e', '2010/01/01-2.1', '2010/01/01-2e'];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve test case 5', () => {
    const input = ["2010/01/01", "1.0", "bacon"];
    const expected = ["1.0", "2010/01/01", "bacon"];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve test case 6', () => {
    const input = [
      "aw7v4h2",
      "1j4b2h5",
      "8w7v4h2",
      "1J4b10h5",
      "1j4b27h5",
      "8w7v5h2",
      "2i79r6qr1",
      "2i79r6qA1",
      "8w7v56h2",
      "8x7000v5h2",
      "8W2017v4h2",
      "8X2017v4h2",
      "8x2017-01-09-v4h2",
      "8x1000v5h2",
      "8x2017-03-09-v4h2",
      "8x2017-03-99-v4h2",
    ];
    const expected = [
      "1j4b2h5",
      "1J4b10h5",
      "1j4b27h5",
      "2i79r6qA1",
      "2i79r6qr1",
      "8w7v4h2",
      "8w7v5h2",
      "8w7v56h2",
      "8W2017v4h2",
      "8x1000v5h2",
      "8x2017-03-99-v4h2",
      "8X2017v4h2",
      "8x7000v5h2",
      "8x2017-01-09-v4h2",
      "8x2017-03-09-v4h2",
      "aw7v4h2",
    ];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should solve test case 7', () => {
    const input = [
      "2010/02/3001/01/15",
      "2010/02/1901/01/15",
      "2010/99/1901/01/15",
    ];
    expect(sortStrings(input)).to.eql([
      "2010/02/3001/01/15",
      "2010/99/1901/01/15",
      "2010/02/1901/01/15",
    ]);
  });

  it('should solve test case 8', () => {
    const input = ['0 3', '0 2', '8 .2', '0 -1', '7 -2.4'];
    const expected = ['0 -1', '0 2', '0 3', '7 -2.4', '8 .2'];
    expect(sortStrings(input)).to.eql(expected);
  });

  it('should simply treat space, dash, dot as separator is string is not parseable as a single number', () => {
    const input = ['A  -2', 'A  1', 'A-3'];
    const expected = ['A  1', 'A  -2', 'A-3'];
    expect(sortStrings(input)).to.eql(expected);
  });
  it('should simply treat space, dash, dot as separator is string is parseable as a single number', () => {
    const input = ['  -2', '  1', '-3'];
    const expected = ['-3', '  -2', '  1'];
    expect(sortStrings(input)).to.eql(expected);
  });
});
