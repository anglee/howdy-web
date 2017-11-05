import Observable from '../utils/Observable';

const get$ImgId = imageId => `img_${imageId}`;
const getImageId = $imgId => $imgId.replace(/^img_/, '');
const createImageThumbnailElement = ({ id, link, width, height }) => {
  const $img = document.createElement('img');
  $img.id = get$ImgId(id);
  $img.src = link.replace(id, `${id}s`);
  $img.className = ' thumbnail';
  $img.title = `Size:${width}x${height}\nClick to enlarge`;
  return $img;
};

const events = {
  clickThumbnail: 'clickThumbnail'
};

class ImageGrid extends Observable {
  constructor ($imageGrid) {
    super();
    this.$imageGrid = $imageGrid;

    // add listener to handle clicking on a thumbnail
    this.$imageGrid.addEventListener("click", e => {
      const find$Img = ($target) => {
        while ($target && $target !== $imageGrid) {
          if ($target.matches('.thumbnail')) {
            return $target;
          }
          $target = $target.parentNode;
        }
      };
      const $img = find$Img(e.target);
      if ($img) {
        const imageId = getImageId($img.id);
        this.broadcast(events.clickThumbnail, imageId);
      }
    }, false);
  }

  add(image) {
    const $img = createImageThumbnailElement(image);
    this.$imageGrid.appendChild($img);
  }

  reset() {
    this.$imageGrid.innerHTML = '';
  }

  addClickThumbnailEventListener (listener) {
    this.addObserver(events.clickThumbnail, listener);
  }
}

export default ImageGrid;