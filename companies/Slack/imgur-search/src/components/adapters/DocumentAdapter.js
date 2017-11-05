import Observable from '../../utils/Observable';

const events = {
  keydownEsc: 'keydownEsc'
};

class DocumentWrapper extends Observable {
  constructor($document) {
    super();
    this.$document = $document;

    // add listener to handle keydown on 'Esc'
    this.$document.onkeydown = e => {
      e = e || window.event;
      var isEscape = false;
      if ('key' in e) {
        isEscape = e.key === 'Escape' || e.key === 'Esc';
      } else {
        isEscape = e.keyCode === 27;
      }
      if (isEscape) {
        this.broadcast(events.keydownEsc);
      }
    };
  }

  addKeyDownEscapeEventListener(listener) {
    this.addObserver(events.keydownEsc, listener);
  }
}

export default DocumentWrapper;