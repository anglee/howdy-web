import * as wheels from '../utils/wheels';
import Lightbox from './Lightbox';

describe('Lightbox', () => {
  const setup = () => {
    const $overlay = { addEventListener: jest.fn(), style: {} };
    const $closeButton = { addEventListener: jest.fn(), style: {} };
    const $lightbox = { addEventListener: jest.fn(), style: {} };
    const $loader = { style: {} };
    const $image = { style: {} };
    const $prevButton = { style: {} };
    const $nextButton = { style: {} };
    const $title = {};
    const $imageContainer = { style: {} };
    const $titleContainer = { style: {} };
    const lightbox = new Lightbox(
      $overlay,
      $closeButton,
      $lightbox,
      $loader,
      $image,
      $prevButton,
      $nextButton,
      $title,
      $imageContainer,
      $titleContainer,
    );
    return {
      $overlay,
      $closeButton,
      $lightbox,
      $loader,
      $image,
      $prevButton,
      $nextButton,
      $title,
      $imageContainer,
      $titleContainer,
      lightbox
    };
  };

  describe('constructor', () => {
    it('should create instance and initialize its state', () => {
      const { lightbox } = setup();
      expect(lightbox.lightboxImage).toBe(null);
    });
    it('should attach click event listener to $overlay', () => {
      const { $overlay } = setup();
      expect($overlay.addEventListener).toBeCalled();
      expect($overlay.addEventListener.mock.calls[0][0]).toBe('click');
    });
    it('should attach click event listener to $overlay', () => {
      const { $overlay } = setup();
      expect($overlay.addEventListener).toBeCalled();
      expect($overlay.addEventListener.mock.calls[0][0]).toBe('click');
    });
    it('should attach click event listener to $closeButton', () => {
      const { $closeButton } = setup();
      expect($closeButton.addEventListener).toBeCalled();
      expect($closeButton.addEventListener.mock.calls[0][0]).toBe('click');
    });
    it('should attach click event listener to $lightbox', () => {
      const { $lightbox } = setup();
      expect($lightbox.addEventListener).toBeCalled();
      expect($lightbox.addEventListener.mock.calls[0][0]).toBe('click');
    });
  });

  describe('on click $overlay', () => {
    it('should close the lightbox', () => {
      const { $overlay, lightbox } = setup();
      const onClick$overlay = $overlay.addEventListener.mock.calls[0][1];
      lightbox.close = jest.fn();
      onClick$overlay();
      expect(lightbox.close).toBeCalled();
    });
  });

  describe('on click $closeButton', () => {
    it('should close the lightbox', () => {
      const { $closeButton, lightbox } = setup();
      const onClick$closeButton = $closeButton.addEventListener.mock.calls[0][1];
      lightbox.close = jest.fn();
      onClick$closeButton();
      expect(lightbox.close).toBeCalled();
    });
  });

  describe('on click $lightbox', () => {
    it('should go to the prev image if clicked on the prev button', () => {
      const { $lightbox, lightbox } = setup();
      const onClick$lightbox = $lightbox.addEventListener.mock.calls[0][1];
      const prevImage = {};
      lightbox.lightboxImage = { prev: prevImage };
      lightbox.setImage = jest.fn();
      const event = { target: { matches: it => it === '#lightboxPrevButton'}};
      onClick$lightbox(event);
      expect(lightbox.setImage).toBeCalledWith(prevImage);
    });
    it('should go to the next image if clicked on the next button', () => {
      const { $lightbox, lightbox } = setup();
      const onClick$lightbox = $lightbox.addEventListener.mock.calls[0][1];
      const nextImage = {};
      lightbox.lightboxImage = { next: nextImage };
      lightbox.setImage = jest.fn();
      const event = { target: { matches: it => it === '#lightboxNextButton'}};
      onClick$lightbox(event);
      expect(lightbox.setImage).toBeCalledWith(nextImage);
    });
    it('should not set image if clicked on nav (i.e. when prev or next button is hidden)', () => {
      const { $lightbox, lightbox } = setup();
      const onClick$lightbox = $lightbox.addEventListener.mock.calls[0][1];
      lightbox.setImage = jest.fn();
      const event = { target: { matches: it => it === '#lightboxNav'}};
      onClick$lightbox(event);
      expect(lightbox.setImage).not.toBeCalled();
    });
    it('should close the light box if not clicked on nav', () => {
      const { $lightbox, lightbox } = setup();
      const onClick$lightbox = $lightbox.addEventListener.mock.calls[0][1];
      lightbox.close = jest.fn();
      const event = { target: { matches: it => it === '#aaa'}};
      onClick$lightbox(event);
      expect(lightbox.close).toBeCalled();
    });
  });

  describe('open', () => {
    it('should make $overlay, $closeButton, and $lightbox visible', () => {
      const { $overlay, $closeButton, $lightbox, lightbox } = setup();
      const $showSpy = jest.spyOn(wheels, '$show');
      lightbox.open();
      expect($showSpy).toBeCalledWith($overlay);
      expect($showSpy).toBeCalledWith($closeButton);
      expect($showSpy).toBeCalledWith($lightbox);
      $showSpy.mockRestore();
    });
    it('should call resizeOverlay', () => {
      const { lightbox } = setup();
      lightbox.resizeOverlay = jest.fn();
      lightbox.open();
      expect(lightbox.resizeOverlay).toBeCalled();
    });
    it('should call positionLightbox', () => {
      const { lightbox } = setup();
      lightbox.positionLightbox = jest.fn();
      lightbox.open();
      expect(lightbox.positionLightbox).toBeCalled();
    });
    it('should call disableScrolling', () => {
      const { lightbox } = setup();
      lightbox.disableScrolling = jest.fn();
      lightbox.open();
      expect(lightbox.disableScrolling).toBeCalled();
    });
  });

  describe('close', () => {
    it('should hide $overlay, $closeButton, and $lightbox', () => {
      const { $overlay, $closeButton, $lightbox, lightbox } = setup();
      const $hideSpy = jest.spyOn(wheels, '$hide');
      lightbox.close();
      expect($hideSpy).toBeCalledWith($overlay);
      expect($hideSpy).toBeCalledWith($closeButton);
      expect($hideSpy).toBeCalledWith($lightbox);
      $hideSpy.mockRestore();
    });
    it('should call resizeOverlay', () => {
      const { lightbox } = setup();
      lightbox.enbleScrolling = jest.fn();
      lightbox.close();
      expect(lightbox.enbleScrolling).toBeCalled();
    });
  });

  describe('resizeOverlay', () => {
    it('should resize $overlay', () => {
      const { $overlay, lightbox } = setup();
      const clientWidth = 123;
      const clientHeight = 321;
      Object.defineProperty(document.body, 'clientWidth', { get() { return clientWidth; } });
      Object.defineProperty(document.body, 'clientHeight', { get() { return clientHeight; } });
      lightbox.resizeOverlay();
      expect($overlay.style.width).toBe(`${clientWidth}px`);
      expect($overlay.style.height).toBe(`${clientHeight}px`);
    });
  });

  describe('positionLightbox', () => {
    it('should set $lightbox.style.top', () => {
      const { $lightbox, lightbox } = setup();
      window.scrollY = 123.5;
      lightbox.positionLightbox();
      expect($lightbox.style.top).toBe(`${Math.floor(window.scrollY) + 100}px`);
    });
  });

  describe('resizeLightbox', () => {
    it('should resize components', () => {
      const { $image, $imageContainer, $titleContainer, lightbox } = setup();
      const width = 303;
      const height = 404;
      lightbox.resizeLightbox(width, height);
      const border = 4;
      expect($image.style.width).toBe(`${width}px`);
      expect($image.style.height).toBe(`${height}px`);
      expect($imageContainer.style.width).toBe(`${width + 2 * border}px`);
      expect($imageContainer.style.height).toBe(`${height + 2 * border}px`);
      expect($titleContainer.style.width).toBe(`${width}px`);
    });
  });

  describe('setImage', () => {
    const image = Object.freeze({
      title: 'gallery1',
      id: '2FWIdys',
      link: 'https://i.imgur.com/2FWIdys.jpg',
      width: 4032,
      height: 3024,
    });

    it('should first show $loader and hide $image', () => {
      const { $loader, $image, lightbox } = setup();
      const $showSpy = jest.spyOn(wheels, '$show');
      const $hideSpy = jest.spyOn(wheels, '$hide');
      lightbox.setImage(image);
      expect($showSpy).toBeCalledWith($loader);
      expect($hideSpy).toBeCalledWith($image);
      $showSpy.mockRestore();
      $hideSpy.mockRestore();
    });

    it('should update lightboxImage', () => {
      const { lightbox } = setup();
      lightbox.setImage(image);
      expect(lightbox.lightboxImage).toBe(image);
    });

    it('should update $image.src', () => {
      const { $image, lightbox } = setup();
      lightbox.setImage(image);
      expect($image.src).toBe(image.link.replace(image.id, `${image.id}l`));
    });

    it('should show the prev button if prev image exists', () => {
      const { $prevButton, lightbox } = setup();
      const $showSpy = jest.spyOn(wheels, '$show');
      lightbox.setImage({ ...image, prev: {} });
      expect($showSpy).toBeCalledWith($prevButton);
      $showSpy.mockRestore();
    });

    it('should hide the prev button if prev image does not exist', () => {
      const { $prevButton, lightbox } = setup();
      const $hideSpy = jest.spyOn(wheels, '$hide');
      lightbox.setImage({ ...image, prev: undefined });
      expect($hideSpy).toBeCalledWith($prevButton);
      $hideSpy.mockRestore();
    });

    it('should show the next button if next image exists', () => {
      const { $nextButton, lightbox } = setup();
      const $showSpy = jest.spyOn(wheels, '$show');
      lightbox.setImage({ ...image, next: {} });
      expect($showSpy).toBeCalledWith($nextButton);
      $showSpy.mockRestore();
    });

    it('should set the text of $title', () => {
      const { $title, lightbox } = setup();
      lightbox.setImage(image);
      expect($title.innerHTML).toBe(image.title);
    });

    it('should call resizeLightbox', () => {
      const { lightbox } = setup();
      lightbox.resizeLightbox = jest.fn();
      lightbox.setImage(image);
      expect(lightbox.resizeLightbox).toBeCalled();
    });

    it('should hide $loader and show $image when image is loaded', () => {
      const { $loader, $image, lightbox } = setup();
      const $showSpy = jest.spyOn(wheels, '$show');
      const $hideSpy = jest.spyOn(wheels, '$hide');
      lightbox.setImage(image);
      $image.onload();
      expect($showSpy).toBeCalledWith($image);
      expect($hideSpy).toBeCalledWith($loader);
      $showSpy.mockRestore();
      $hideSpy.mockRestore();
    });
  });
});
