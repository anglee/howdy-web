import * as fromFetchImages from '../utils/fetchImages';
import ImageLoadController from './ImageLoadController';

const _noop = () => {};

describe('ImageLoadController', () => {
  Object.defineProperty(document.body, 'clientHeight', { get() { return 100; } });
  window.innerHeight = 50;

  const image = Object.freeze({
    title: 'gallery1',
    id: '2FWIdys',
    link: 'https://i.imgur.com/2FWIdys.jpg',
    width: 4032,
    height: 3024,
  });

  const setup = () => {
    const searchBox = {
      getQueryString: () => 'cat',
      addSubmitSearchEventListener: _noop,
    };
    const imageGrid = {
      addClickThumbnailEventListener: jest.fn(),
      add: jest.fn(),
    };
    const lightbox = {
      open: jest.fn(),
      close: jest.fn(),
      setImage: jest.fn(),
      resizeOverlay: jest.fn(),
    };
    const loadMoreButton = {
      addClickLoadMoreButtonEventListener: jest.fn(),
      setIsLoading: jest.fn(),
      hide: jest.fn(),
    };
    const adaptedDocument = {
      addKeyDownEscapeEventListener: jest.fn(),
    };
    const adaptedWindow = {
      addResizeEventListener: jest.fn(),
      addScrollEventListener: jest.fn(),
    };
    const imageStore = {
      add: jest.fn(),
      get: (imageId) => (imageId === image.id ? image : null),
    };

    const controller = new ImageLoadController(
      searchBox,
      imageGrid,
      lightbox,
      loadMoreButton,
      adaptedDocument,
      adaptedWindow,
      imageStore,
    );
    return {
      searchBox,
      imageGrid,
      lightbox,
      loadMoreButton,
      adaptedDocument,
      adaptedWindow,
      controller,
      imageStore,
    }
  };

  describe('constructor', () => {
    it('should create instance and initialize its state', () => {
      const { controller } = setup();
      expect(controller.page).toBe(0);
      expect(controller.hasMore).toBe(true);
      expect(controller.isLoading).toBe(false);
    });
  });

  describe('firstLoad', () => {
    it('should stop loading when there is no more to load', () => {
      const { controller } = setup();
      controller.loadMore = jest.fn(() => Promise.resolve(false));
      return controller.firstLoad();
    });
    it('should stop loading when the client area is filled', () => {
      const { controller } = setup();
      controller.loadMore = jest.fn(() => Promise.resolve(true));
      return controller.firstLoad();
    });
  });

  describe('loadMore', () => {
    it('should return false promise if isLoading is true', () => {
      const { controller } = setup();
      controller.isLoading = true;
      return controller.loadMore()
        .then(ret => {
          expect(ret).toBe(false);
        });
    });
    it('should return false promise if hasMore is true', () => {
      const { controller } = setup();
      controller.isLoading = true;
      return controller.loadMore()
        .then(ret => {
          expect(ret).toBe(false);
        });
    });
    describe('when fetchImage returns non-empty result', () => {
      let fetchImages = null;
      beforeEach(() => {
        fetchImages = jest.spyOn(fromFetchImages, 'fetchImages').mockImplementation(() => [image]);
      });
      afterEach(() => {
        fetchImages.mockRestore();
      });
      it('should set isLoading to true before fetching images', () => {
        const { controller, loadMoreButton } = setup();
        controller.loadMore();
        expect(controller.isLoading).toBe(true);
        expect(loadMoreButton.setIsLoading).toBeCalledWith(true);
        expect(fetchImages).toBeCalledWith(controller.query, 0);
        expect(controller.page).toBe(1);
      });
      it('should set isLoading to false after fetching images', () => {
        const { controller, loadMoreButton, imageStore, imageGrid } = setup();
        return controller.loadMore().then((result) => {
          expect(controller.isLoading).toBe(false);
          expect(loadMoreButton.setIsLoading).toBeCalledWith(false);
          expect(imageStore.add).toBeCalledWith(image);
          expect(imageGrid.add).toBeCalledWith(image);
          expect(result).toBe(true);
        })
      });
    });

    describe('when fetchImage returns empty result', () => {
      let fetchImages = null;
      beforeEach(() => {
        fetchImages = jest.spyOn(fromFetchImages, 'fetchImages').mockImplementation(() => []);
      });
      afterEach(() => {
        fetchImages.mockRestore();
      });
      it('should set isLoading to true before fetching images', () => {
        const { controller, loadMoreButton } = setup();
        controller.loadMore();
        expect(controller.isLoading).toBe(true);
        expect(loadMoreButton.setIsLoading).toBeCalledWith(true);
        expect(fetchImages).toBeCalledWith(controller.query, 0);
        expect(controller.page).toBe(1);
      });
      it('should set isLoading to false after fetching images', () => {
        const { controller, loadMoreButton, imageStore, imageGrid } = setup();
        return controller.loadMore().then((result) => {
          expect(controller.isLoading).toBe(false);
          expect(loadMoreButton.setIsLoading).toBeCalledWith(false);
          expect(imageStore.add).not.toBeCalled();
          expect(imageGrid.add).not.toBeCalledWith();
          expect(result).toBe(false);
        })
      });
    });

    describe('when fetchImage fails', () => {
      let fetchImages = null;
      beforeEach(() => {
        fetchImages = jest.spyOn(fromFetchImages, 'fetchImages')
          .mockImplementation(() => Promise.reject(new Error("failed to fetch image")));
      });
      afterEach(() => {
        fetchImages.mockRestore();
      });
      it('should set isLoading to true before fetching images', () => {
        const { controller, loadMoreButton } = setup();
        controller.loadMore();
        expect(controller.isLoading).toBe(true);
        expect(loadMoreButton.setIsLoading).toBeCalledWith(true);
        expect(fetchImages).toBeCalledWith(controller.query, 0);
        expect(controller.page).toBe(1);
      });
      it('should set isLoading to false after fetching images', () => {
        const { controller, loadMoreButton, imageStore, imageGrid } = setup();
        return controller.loadMore().then((result) => {
          expect(controller.isLoading).toBe(false);
          expect(loadMoreButton.setIsLoading).toBeCalledWith(false);
          expect(imageStore.add).not.toBeCalled();
          expect(imageGrid.add).not.toBeCalledWith();
          expect(result).toBe(false);
        });
      });
    });
  });

  describe('on click thumbnail', () => {
    it('should open the lightbox', () => {
      const { imageGrid, lightbox } = setup();
      const onClickThumbnail = imageGrid.addClickThumbnailEventListener.mock.calls[0][0];
      onClickThumbnail();
      expect(lightbox.open).toBeCalled();
    });
    it('should set the image clicked to be load and displayed in the lightbox', () => {
      const { imageGrid, lightbox } = setup();
      const onClickThumbnail = imageGrid.addClickThumbnailEventListener.mock.calls[0][0];
      onClickThumbnail(image.id);
      expect(lightbox.setImage).toBeCalledWith(image);
    });
  });

  describe('on key down "ESC', () => {
    it('should close the lightbox', () => {
      const { adaptedDocument, lightbox } = setup();
      const onKeyDownEscape = adaptedDocument.addKeyDownEscapeEventListener.mock.calls[0][0];
      onKeyDownEscape();
      expect(lightbox.close).toBeCalled();
    });
  });

  describe('on resize window', () => {
    it('should resize the lightbox overaly', () => {
      it('should close the lightbox', () => {
        const { adaptedWindow, lightbox } = setup();
        const onResizeWindow = adaptedWindow.addResizeEventListener.mock.calls[0][0];
        onResizeWindow();
        expect(lightbox.resizeOverlay).toBeCalled();
      });
    });
  });

  describe('on click "load more" button', () => {
    it('should load more', () => {
      const { loadMoreButton, controller } = setup();
      controller.loadMore = jest.fn();
      const onClickLoadMoreButton =
        loadMoreButton.addClickLoadMoreButtonEventListener.mock.calls[0][0];
      onClickLoadMoreButton();
      expect(controller.loadMore).toBeCalled();
    });
  });

  describe('on scroll to the bottom', () => {
    it('should load more if reached the bottom', () => {
      const { adaptedWindow, controller } = setup();
      controller.loadMore = jest.fn();
      window.scrollY = 60;
      const onScrollToBottom = adaptedWindow.addScrollEventListener.mock.calls[0][0];
      onScrollToBottom();
      expect(controller.loadMore).toBeCalled();
    });
    it('should not load more if reached the bottom', () => {
      const { adaptedWindow, controller } = setup();
      controller.loadMore = jest.fn();
      window.scrollY = 61;
      const onScrollToBottom = adaptedWindow.addScrollEventListener.mock.calls[0][0];
      onScrollToBottom();
      expect(controller.loadMore).not.toBeCalled();
    });
  });
});
