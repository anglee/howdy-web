import { expect } from 'chai';
import solution from './candyCrush1D';

describe('solution', () => {
  it('should solve the given example 1', () => {
    expect(solution('AAA')).to.equal('');
  });

  it('should solve the given example 2', () => {
    expect(solution('ABBBA')).to.equal('AA');
  });

  it('should solve the given example 3', () => {
    expect(solution('ABBBAAA')).to.equal('');
  });

  it('should solve the given example 4', () => {
    expect(solution('ABBBCAAA')).to.equal('AC');
  });

  it('should solve the given example 4', () => {
    expect(solution('DABBBAAADDE')).to.equal('E');
  });
});
