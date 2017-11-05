import {
  _isEmpty,
  _last,
  _delay,
  _trim,
  $show,
  $hide,
} from './wheels';

describe('wheel', () => {
  describe('_isEmpty', () => {
    it('should return true for empty array', () => {
      expect(_isEmpty([])).toBe(true);
    });
    it('should return false for non-empty array', () => {
      expect(_isEmpty(['foo'])).toBe(false);
    });
    it('should return true for undefined input', () => {
      expect(_isEmpty()).toBe(true);
    });
    it('should return true for null input', () => {
      expect(_isEmpty(null)).toBe(true);
    });
  });
  describe('_last', () => {
    it('should return the last element of an array', () => {
      const lastElement = {foo: 'bar'};
      expect(_last([lastElement])).toBe(lastElement);
    });
    it('should return undefined for empty input', () => {
      expect(_last([])).toBe(undefined);
    });
  });
  describe('_delay', () => {
    it('should return a promise that is resolved after given ms', (done) => {
      jest.useFakeTimers();
      _delay(1000).then(done);
      jest.runAllTimers();
    });
  });
  describe('_trim', () => {
    it('should trim input string', () => {
      expect(_trim(' foo ')).toBe('foo');
    });
  });
  describe('$show', () => {
    it('should set element display style to "block"', () => {
      const element = { style: { display: 'none' } };
      $show(element);
      expect(element.style.display).toBe('block');
    });
  });
  describe('$hide', () => {
    it('should set element display style to "none"', () => {
      const element = { style: { display: 'block' } };
      $hide(element);
      expect(element.style.display).toBe('none');
    });
  });
});
