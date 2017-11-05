import Observable from '../utils/Observable';
import { $hide, $show, } from '../utils/wheels';

const events = {
  click: 'click'
};

class LoadMoreButton extends Observable {
  constructor (
    $loadMoreButton,
    $loadingStatus,
  ) {
    super();
    this.$loadMoreButton = $loadMoreButton;
    this.$loadingStatus = $loadingStatus;
    this.isHidden = false;
    this.isLoading = false;
    this.$loadMoreButton.addEventListener('click', () => {
      this.broadcast(events.click);
    });
  }

  update() {
    if (this.isHidden) {
      $hide(this.$loadMoreButton);
      $hide(this.$loadingStatus);
    } else if (this.isLoading) {
      $hide(this.$loadMoreButton);
      $show(this.$loadingStatus);
    } else {
      $show(this.$loadMoreButton);
      $hide(this.$loadingStatus);
    }
  }

  show() {
    this.isHidden = false;
    this.update();
  }

  hide() {
    this.isHidden = true;
    this.update();
  }

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
    this.update();
  }

  reset() {
    this.isHidden = false;
    this.isLoading = false;
    this.update();
  }

  addClickLoadMoreButtonEventListener(listener) {
    this.addObserver(events.click, listener);
  }
}

export default LoadMoreButton;
