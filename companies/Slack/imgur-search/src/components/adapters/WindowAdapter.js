import Observable from '../../utils/Observable';

const events = {
  resize: 'resize',
  scroll: 'scroll',
};

class WindowWrapper extends Observable {
  constructor ($window) {
    super();
    this.$window = $window;
    this.$window.onresize = () => {
      this.broadcast(events.resize);
    };
    this.$window.onscroll = () => {
      this.broadcast(events.scroll);
    };
  }

  addResizeEventListener(listener) {
    this.addObserver(events.resize, listener);
  }

  addScrollEventListener(listener) {
    this.addObserver(events.scroll, listener);
  }
}

export default WindowWrapper;