import { _last } from '../utils/wheels';
import SearchBox from './SearchBox';

const ENTER = 13;
const _noop = () => {};
const events = { search: 'search' };
const defaultQueryString = 'cat';

describe('SearchBox', () => {
  const setup = () => {
    const $searchBox = { addEventListener: jest.fn() };
    const $searchButton = { src: null, onclick: jest.fn() };
    const searchBox = new SearchBox($searchBox, $searchButton);
    return { $searchBox, $searchButton, searchBox };
  };

  describe('constructor', () => {
    it('should create instance and initialize components', () => {
      const { $searchBox } = setup();
      expect($searchBox.value).toBe(defaultQueryString);
    });
    it('should attach keyup event listener', () => {
      const { $searchBox } = setup();
      expect($searchBox.addEventListener).toBeCalled();
      expect($searchBox.addEventListener.mock.calls[0][0]).toBe('keyup');
    });
  });

  describe('on keyup "Enter"', () => {
    const keyupEvent = {
      preventDefault: _noop,
      keyCode: ENTER,
    };
    it('should update queryString', () => {
      const { $searchBox, searchBox } = setup();
      const queryString = 'foo';
      $searchBox.value = queryString;
      const keyupEventListener = $searchBox.addEventListener.mock.calls[0][1];
      keyupEventListener(keyupEvent);
      expect(searchBox.getQueryString()).toBe(queryString);
    });
    it('should broadcast the "search" event', () => {
      const { $searchBox, searchBox } = setup();
      searchBox.broadcast = jest.fn();
      const queryString = 'foo';
      $searchBox.value = queryString;
      const keyupEventListener = $searchBox.addEventListener.mock.calls[0][1];
      keyupEventListener(keyupEvent);
      expect(searchBox.broadcast).toBeCalledWith(events.search);
    });
  });

  describe('on click search button', () => {
    it('should broadcast the "search" event', () => {
      const { $searchBox, $searchButton, searchBox } = setup();
      searchBox.broadcast = jest.fn();
      $searchButton.onclick();
      expect(searchBox.broadcast).toBeCalledWith(events.search);
    });
  });

  describe('addSubmitSearchEventListener', () => {
    it('should append listener to the list of "search" event observers', () => {
      const { searchBox } = setup();
      const listener = () => ({ foo: 'bar' });
      searchBox.addSubmitSearchEventListener(listener);
      expect(_last(searchBox.observers.get(events.search))).toBe(listener);
    });

    describe('added listeners', () => {
      it('should be called when search is submitted', () => {
        const { searchBox } = setup();
        const listener = jest.fn();
        searchBox.addSubmitSearchEventListener(listener);
        searchBox.broadcast(events.search);
        expect(listener).toBeCalled();
      });
    });
  });
});
