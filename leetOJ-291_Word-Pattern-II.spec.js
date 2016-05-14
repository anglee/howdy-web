import {expect} from 'chai';
import solution from './leetOJ-291_Word-Pattern-II';

describe('leetOJ-291_Word-Pattern-II', () => {
  it('should match pattern', () => {
    const pattern = '';
    const str = '';
    expect(solution(pattern, str)).to.be.true;
  });
  it('should match pattern', () => {
    const pattern = 'a';
    const str = 'abc';
    expect(solution(pattern, str)).to.be.true;
  });
  it('should match pattern', () => {
    const pattern = 'aa';
    const str = 'abcabc';
    expect(solution(pattern, str)).to.be.true;
  });
  it('should match pattern', () => {
    const pattern = 'ab';
    const str = 'xyz';
    expect(solution(pattern, str)).to.be.true;
  });
  it('should match pattern', () => {
    const pattern = 'abba';
    const str = 'dogcatcatdog';
    expect(solution(pattern, str)).to.be.true;
  });
  it('should match pattern', () => {
    const pattern = 'abab';
    const str = 'dogcatdogcat';
    expect(solution(pattern, str)).to.be.true;
  });
  it('should match pattern', () => {
    const pattern = 'abab';
    const str = 'dogcatdogfish';
    expect(solution(pattern, str)).to.be.false;
  });
});
