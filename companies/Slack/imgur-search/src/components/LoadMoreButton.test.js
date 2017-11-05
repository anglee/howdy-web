import * as wheels from '../utils/wheels';
import { _last } from '../utils/wheels';
import LoadMoreButton from './LoadMoreButton';

const events = { click: 'click' };

describe('LoadMoreButton', () => {
  const setup = () => {
    const $loadMoreButton = { addEventListener: jest.fn(),  style: {}  };
    const $loadingStatus = { style: {} };
    const loadMoreButton = new LoadMoreButton($loadMoreButton, $loadingStatus);
    return { $loadMoreButton, $loadingStatus, loadMoreButton };
  };

  describe('constructor', () => {
    it('should create instance and initialize', () => {
      const { loadMoreButton } = setup();
      expect(loadMoreButton.isHidden).toBe(false);
      expect(loadMoreButton.isLoading).toBe(false);
    });
    it('should attach click event listener to the "load more" button', () => {
      const { $loadMoreButton } = setup();
      expect($loadMoreButton.addEventListener).toBeCalled();
      expect($loadMoreButton.addEventListener.mock.calls[0][0]).toBe('click');
    });
  });

  describe('update', () => {
    let $hideSpy = null;
    let $showSpy = null;

    beforeEach(() => {
      $hideSpy = jest.spyOn(wheels, '$hide');
      $showSpy = jest.spyOn(wheels, '$show');
    });

    afterEach(() => {
      $hideSpy.mockRestore();
      $showSpy.mockRestore();
    });

    it('should hide both $loadMoreButton and $loadingStatus if isHidden is true', () => {
      const { $loadMoreButton, $loadingStatus, loadMoreButton } = setup();
      loadMoreButton.isHidden = true;
      loadMoreButton.update();
      expect($hideSpy).toBeCalledWith($loadMoreButton);
      expect($hideSpy).toBeCalledWith($loadingStatus);
    });

    it('should hide $loadMoreButton and show $loadingStatus if isHidden is false and isLoading is true', () => {
      const { $loadMoreButton, $loadingStatus, loadMoreButton } = setup();
      loadMoreButton.isHidden = false;
      loadMoreButton.isLoading = true;
      loadMoreButton.update();
      expect($hideSpy).toBeCalledWith($loadMoreButton);
      expect($showSpy).toBeCalledWith($loadingStatus);
    });

    it('should show $loadMoreButton and hide $loadingStatus if isHidden is false and isLoading is false', () => {
      const { $loadMoreButton, $loadingStatus, loadMoreButton } = setup();
      loadMoreButton.isHidden = false;
      loadMoreButton.isLoading = false;
      loadMoreButton.update();
      expect($showSpy).toBeCalledWith($loadMoreButton);
      expect($hideSpy).toBeCalledWith($loadingStatus);
    });
  });

  describe('show', () => {
    it('should set isHidden to false and call update()', () => {
      const { loadMoreButton } = setup();
      loadMoreButton.update = jest.fn();
      loadMoreButton.show();
      expect(loadMoreButton.isHidden).toBe(false);
      expect(loadMoreButton.update).toBeCalled();
    });
  });

  describe('hide', () => {
    it('should set isHidden to true and call update()', () => {
      const { loadMoreButton } = setup();
      loadMoreButton.update = jest.fn();
      loadMoreButton.hide();
      expect(loadMoreButton.isHidden).toBe(true);
      expect(loadMoreButton.update).toBeCalled();
    });
  });

  describe('setIsLoading', () => {
    it('should set isLoading to true and call update()if called true', () => {
      const { loadMoreButton } = setup();
      loadMoreButton.update = jest.fn();
      loadMoreButton.setIsLoading(true);
      expect(loadMoreButton.isLoading).toBe(true);
      expect(loadMoreButton.update).toBeCalled();
    });
    it('should set isLoading to false and call update() if called false', () => {
      const { loadMoreButton } = setup();
      loadMoreButton.update = jest.fn();
      loadMoreButton.setIsLoading(false);
      expect(loadMoreButton.isLoading).toBe(false);
      expect(loadMoreButton.update).toBeCalled();
    });
  });

  describe('reset', () => {
    it('should set isHidden to true and call update()', () => {
      const { loadMoreButton } = setup();
      loadMoreButton.update = jest.fn();
      loadMoreButton.reset();
      expect(loadMoreButton.isHidden).toBe(false);
      expect(loadMoreButton.isLoading).toBe(false);
      expect(loadMoreButton.update).toBeCalled();
    });
  });

  describe('addClickLoadMoreButtonEventListener', () => {
    it('should append listener to the list of "search" event observers', () => {
      const { loadMoreButton } = setup();
      const listener = () => ({ foo: 'bar' });
      loadMoreButton.addClickLoadMoreButtonEventListener(listener);
      expect(_last(loadMoreButton.observers.get(events.click))).toBe(listener);
    });

    describe('added listeners', () => {
      it('should be called when search is submitted', () => {
        const { loadMoreButton } = setup();
        const listener = jest.fn();
        loadMoreButton.addClickLoadMoreButtonEventListener(listener);
        loadMoreButton.broadcast(events.click);
        expect(listener).toBeCalled();
      });
    });
  });
});
