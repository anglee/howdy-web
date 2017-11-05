import { _isEmpty, _last } from '../utils/wheels';

class ImageStore {
  constructor() {
    this.allImages = [];
    this.imagesMap = new Map();
  }

  add(image) {
    if (!_isEmpty(this.allImages)) {
      const lastImage = _last(this.allImages);
      lastImage.next = image;
      image.prev = lastImage;
    } else {
      image.prev = null;
    }
    this.allImages.push(image);
    this.imagesMap.set(image.id, image);
  }

  reset() {
    this.allImages = [];
    this.imagesMap = new Map();
  }

  get(imageId) {
    return this.imagesMap.get(imageId);
  }
}

export default ImageStore;