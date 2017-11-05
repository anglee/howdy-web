import { _last } from '../utils/wheels';
import ImageStore from './ImageStore';

describe('ImageStore', () => {
  describe('constructor', () => {
    it('should initialize data structures to be empty', () => {
      const imageStore = new ImageStore();
      expect(imageStore.allImages.length).toBe(0);
      expect(imageStore.imagesMap.size).toBe(0);
    });
  });

  describe('add', () => {
    it('should add image to the array', () => {
      const imageStore = new ImageStore();
      const image = {};
      imageStore.add(image);
      expect(_last(imageStore.allImages)).toBe(image);
    });
    it('should link the added image with the last existing image', () => {
      const imageStore = new ImageStore();
      const image1 = { id: 'foo1' };
      const image2 = { id: 'foo2' };
      imageStore.add(image1);
      imageStore.add(image2);
      expect(image1.next).toBe(image2);
      expect(image2.prev).toBe(image1);
    });
    it('should add image to the map', () => {
      const imageStore = new ImageStore();
      const image = { id: 'foo' };
      imageStore.add(image);
      expect(imageStore.imagesMap.get(image.id)).toBe(image);
    });
  });

  describe('reset', () => {
    it('should restore data structures to be empty', () => {
      const imageStore = new ImageStore();
      const image1 = { id: 'foo1' };
      const image2 = { id: 'foo2' };
      imageStore.add(image1);
      imageStore.add(image2);
      imageStore.reset();
      expect(imageStore.allImages.length).toBe(0);
      expect(imageStore.imagesMap.size).toBe(0);
    });
  });

  describe('get', () => {
    it('should get the image with image ID', () => {
      const imageStore = new ImageStore();
      const image1 = { id: 'foo1' };
      const image2 = { id: 'foo2' };
      imageStore.add(image1);
      imageStore.add(image2);
      expect(imageStore.get(image1.id)).toBe(image1);
      expect(imageStore.get(image2.id)).toBe(image2);
    });
  });
});
