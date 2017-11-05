import { _last } from '../utils/wheels';
import ImageGrid from './ImageGrid';

const events = { clickThumbnail: 'clickThumbnail' };

describe('ImageGrid', () => {
  const setup = () => {
    const $imageGrid = {
      addEventListener: jest.fn(),
      appendChild: jest.fn(),
    };
    const imageGrid = new ImageGrid($imageGrid);
    return { $imageGrid, imageGrid };
  };

  describe('constructor', () => {
    it('should attach click event listener', () => {
      const { $imageGrid } = setup();
      expect($imageGrid.addEventListener).toBeCalled();
      expect($imageGrid.addEventListener.mock.calls[0][0]).toBe('click');
    });
  });

  describe('on click on a thumbnail', () => {
    it('should broadcast the "clickThumbnail" event', () => {
      const { $imageGrid, imageGrid } = setup();
      imageGrid.broadcast = jest.fn();
      const onclick = $imageGrid.addEventListener.mock.calls[0][1];
      const $img = {
        id: 'abcd',
        matches: jest.fn(it => it === '.thumbnail'),
      };
      onclick({ target: $img });
      expect(imageGrid.broadcast).toBeCalledWith(events.clickThumbnail, $img.id);
    });
  });

  describe('add', () => {
    it('should add image to the grid', () => {
      const { $imageGrid, imageGrid } = setup();
      const image = {
        title: 'gallery1',
        id: '2FWIdys',
        link: 'https://i.imgur.com/2FWIdys.jpg',
        width: 4032,
        height: 3024,
      };
      imageGrid.add(image);
      expect($imageGrid.appendChild).toBeCalled();
    });
  });

  describe('reset', () => {
    it('should empty $imageGrid', () => {
      const { $imageGrid, imageGrid } = setup();
      imageGrid.reset();
      expect($imageGrid.innerHTML).toEqual('');
    });
  });

  describe('addClickThumbnailEventListener', () => {
    it('should append listener to the list of "clickThumbnail" event observers', () => {
      const { imageGrid } = setup();
      const listener = () => ({ foo: 'bar' });
      imageGrid.addClickThumbnailEventListener(listener);
      expect(_last(imageGrid.observers.get(events.clickThumbnail))).toBe(listener);
    });

    describe('added listeners', () => {
      it('should be called when search is submitted', () => {
        const { imageGrid } = setup();
        const listener = jest.fn();
        imageGrid.addClickThumbnailEventListener(listener);
        imageGrid.broadcast(events.clickThumbnail);
        expect(listener).toBeCalled();
      });
    });
  });
});
