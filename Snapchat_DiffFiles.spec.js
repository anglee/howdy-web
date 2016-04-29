import {expect} from 'chai';
import diffFiles from './Snapchat_DiffFiles';

describe('Snapchat_DiffFiles', () => {
  it('should generate the diffs of 2 files', () => {
    const f1 = [
      '1',
      '2',
      '3',
      '4',
      '9'
    ].join('\n');
    const f2 = [
      '1',
      'X',
      '3',
      '9'
    ].join('\n');
    const expected = [
      ' 1',
      '-2',
      '+X',
      ' 3',
      '-4',
      ' 9'
    ].join('\n');
    expect(diffFiles(f1, f2)).to.equal(expected);
  });
});
