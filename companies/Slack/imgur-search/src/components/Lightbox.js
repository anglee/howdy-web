import { $hide, $show, } from '../utils/wheels';

class Lightbox {
  constructor(
    $overlay,
    $closeButton,
    $lightbox,
    $loader,
    $image,
    $prevButton,
    $nextButton,
    $title,
    $imageContainer,
    $titleContainer
  ) {
    this.$overlay = $overlay;
    this.$closeButton = $closeButton;
    this.$lightbox = $lightbox;
    this.$loader = $loader;
    this.$image = $image;
    this.$prevButton = $prevButton;
    this.$nextButton = $nextButton;
    this.$title = $title;
    this.$imageContainer = $imageContainer;
    this.$titleContainer = $titleContainer;
    this.lightboxImage = null;

    this.$overlay.addEventListener('click', () => { this.close(); }, false);
    this.$closeButton.addEventListener("click", () => { this.close(); }, false);
    this.$lightbox.addEventListener('click', (e) => {
      if (e.target.matches('#lightboxPrevButton')) {
        this.setImage(this.lightboxImage.prev);
      } else if (e.target.matches('#lightboxNextButton')) {
        this.setImage(this.lightboxImage.next);
      } else if (e.target.matches('#lightboxNav')) {
        // no-op;
      } else {
        this.close();
      }
    }, false);
  }

  open() {
    $show(this.$overlay);
    $show(this.$closeButton);
    $show(this.$lightbox);
    this.resizeOverlay();
    this.positionLightbox();
    this.disableScrolling();
  }

  close() {
    $hide(this.$overlay);
    $hide(this.$closeButton);
    $hide(this.$lightbox);
    this.enbleScrolling();
  }

  resizeOverlay() {
    this.$overlay.style.width = `${document.body.clientWidth}px`;
    this.$overlay.style.height = `${document.body.clientHeight}px`;
  };

  positionLightbox() {
    const top = Math.floor(window.scrollY);
    this.$lightbox.style.top = `${top + 100}px`;
  }

  disableScrolling() {
    document.body.style.overflow = 'hidden';
  }

  enbleScrolling() {
    document.body.style.overflow = null;
  }

  resizeLightbox(width, height) {
    const border = 4;
    this.$image.style.width = `${width}px`;
    this.$image.style.height = `${height}px`;
    this.$imageContainer.style.width = `${width + 2 * border}px`;
    this.$imageContainer.style.height = `${height + 2 * border}px`;
    this.$titleContainer.style.width = `${width}px`;
  }

  setImage(image) {
    $show(this.$loader);
    $hide(this.$image);
    this.lightboxImage = image;
    this.$image.src = image.link.replace(image.id, `${image.id}l`);
    image.prev ? $show(this.$prevButton) : $hide(this.$prevButton);
    image.next ? $show(this.$nextButton) : $hide(this.$nextButton);
    this.$title.innerHTML = image.title;
    if (image.width > image.height) {
      const scaledWidth = 500;
      const scaledHeight = Math.floor(scaledWidth * image.height / image.width);
      this.resizeLightbox(scaledWidth, scaledHeight);
    } else {
      const scaledHeight = 350;
      const scaledWidth = Math.floor(scaledHeight * image.width / image.height);
      this.resizeLightbox(scaledWidth, scaledHeight);
    }

    this.$image.onload = () => {
      $hide(this.$loader);
      $show(this.$image);
    };
  }
}

export default Lightbox;