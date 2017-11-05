import { _last } from '../utils/wheels';
import Observable from './Observable';

describe('Observable', () => {
  describe('addObserver', () => {
    it('should add the observer to the list of the specific event', () => {
      const observable = new Observable();
      const event = "foo";
      const observer = jest.fn();
      observable.addObserver(event, observer);
      expect(_last(observable.observers.get(event))).toBe(observer);
    });
  });
  describe('broadcast', () => {
    it('should call observers who are observing the specifc event with payload', () => {
      const observable = new Observable();
      const event = "foo";
      const observer = jest.fn();
      observable.addObserver(event, observer);
      const payload = '1234';
      observable.broadcast(event, payload);
      expect(observer).toBeCalledWith(payload);
    });
    it('should not call observers who are not observing the specifc event', () => {
      const observable = new Observable();
      const event = "foo";
      const fooObserver = jest.fn();
      observable.addObserver(event, fooObserver);
      const anotherEvent = "bar";
      observable.broadcast(anotherEvent);
      expect(fooObserver).not.toBeCalled();
    });
  });

});
