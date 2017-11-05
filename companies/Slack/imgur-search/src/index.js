import './index.less';
import ImageGrid from './components/ImageGrid';
import Lightbox from './components/Lightbox';
import SearchBox from './components/SearchBox';
import LoadMoreButton from './components/LoadMoreButton';
import ImageLoadController from './components/ImageLoadController';
import WindowAdapter from './components/adapters/WindowAdapter';
import DocumentAdapter from './components/adapters/DocumentAdapter';
import ImageStore from './components/ImageStore';

document.addEventListener('DOMContentLoaded', function () {

  const loadMoreButton = new LoadMoreButton(
    document.getElementById('loadMoreButton'),
    document.getElementById('loadingStatus'),
  );
  const searchBox = new SearchBox(
    document.getElementById('searchBox'),
    document.getElementById('searchButton'),
  );
  const imageGrid = new ImageGrid(
    document.getElementById('imageGrid')
  );
  const lightbox = new Lightbox(
    document.getElementById('lightboxOverlay'),
    document.getElementById('lightboxCloseButton'),
    document.getElementById('lightbox'),
    document.getElementById('lightboxLoader'),
    document.getElementById('lightboxImage'),
    document.getElementById('lightboxPrevButton'),
    document.getElementById('lightboxNextButton'),
    document.getElementById('lightboxTitle'),
    document.getElementById('lightboxImageContainer'),
    document.getElementById('lightboxTitleContainer'),
  );

  const adaptedDocument = new DocumentAdapter(document);
  const adaptedWindow = new WindowAdapter(window);
  const imageStore = new ImageStore();

  const controller = new ImageLoadController(
    searchBox,
    imageGrid,
    lightbox,
    loadMoreButton,
    adaptedDocument,
    adaptedWindow,
    imageStore,
  );

  controller.firstLoad();
});
