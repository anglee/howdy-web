import { fetchImages } from '../utils/fetchImages';
import { _delay } from '../utils/wheels';

class ImageLoadController {
  constructor (
    searchBox,
    imageGrid,
    lightbox,
    loadMoreButton,
    adaptedDocument,
    adaptedWindow,
    imageStore,
  ) {
    this.query = searchBox.getQueryString();
    this.page = 0;
    this.hasMore = true;
    this.isLoading = false;
    this.imageStore = imageStore;
    this.adaptedWindow = adaptedWindow;
    this.adaptedDocument = adaptedDocument;
    this.searchBox = searchBox;
    this.imageGrid = imageGrid;
    this.lightbox = lightbox;
    this.loadMoreButton = loadMoreButton;

    this.searchBox.addSubmitSearchEventListener(() => {
      this.query = this.searchBox.getQueryString();
      this.page = 0;
      this.hasMore = true;
      this.isLoading = false;
      this.imageStore.reset();
      this.imageGrid.reset();
      this.loadMoreButton.reset();

      this.firstLoad();
    });
    this.imageGrid.addClickThumbnailEventListener((imageId) => {
      this.lightbox.open();
      this.lightbox.setImage(this.imageStore.get(imageId));
    });
    this.adaptedDocument.addKeyDownEscapeEventListener(() => {
      this.lightbox.close();
    });
    this.adaptedWindow.addResizeEventListener(() => {
      this.lightbox.resizeOverlay();
    });
    this.loadMoreButton.addClickLoadMoreButtonEventListener(() => {
      this.loadMore();
    });

    // infinite scroll, load more when scrolled to the bottom
    this.adaptedWindow.addScrollEventListener(() => {
      const bottomMargin = 9;
      if (Math.abs(window.scrollY + window.innerHeight - document.body.clientHeight - bottomMargin) <= 1) {
        console.log('%c load more', 'font-size: 22px; color: #2abbb0',);
        this.loadMore();
      }
    });
  }

  async firstLoad() {
    // load images until either there is no more to load or the viewport has been filled
    let shouldLoadMore = true;
    while (shouldLoadMore) {
      const hasMore = await this.loadMore();
      if (!hasMore) {
        return false;
      }
      await _delay(150);
      shouldLoadMore = document.body.clientHeight <= window.innerHeight;
    }
  }

  async loadMore() {
    if (this.isLoading || !this.hasMore) {
      return false;
    }
    try {
      this.isLoading = true;
      this.loadMoreButton.setIsLoading(true);
      const images = await fetchImages(this.query, this.page++);
      this.isLoading = false;
      this.loadMoreButton.setIsLoading(false);
      if (images.length === 0) {
        this.hasMore = false;
        this.loadMoreButton.hide();
        return false;
      }
      images.forEach(image => this.imageStore.add(image));
      images.forEach(image => this.imageGrid.add(image));
      return true;
    } catch (error) {
      this.isLoading = false;
      this.hasMore = false;
      this.loadMoreButton.setIsLoading(false);
      this.loadMoreButton.hide();
      return false;
    }
  }
}

export default ImageLoadController;