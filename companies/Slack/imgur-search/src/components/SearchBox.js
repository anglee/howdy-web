import searchIcon from '../images/search.png';
import Observable from '../utils/Observable';
import { _trim } from '../utils/wheels';

const events = {
  search: 'search'
};

const defaultQueryString = 'cat';

class SearchBox extends Observable {
  constructor(
    $searchBox,
    $searchButton) {
    super();
    this.$searchBox = $searchBox;
    this.$searchButton = $searchButton;
    this.$searchButton.src = searchIcon;
    this.queryString = defaultQueryString;
    this.$searchBox.value = this.queryString;

    const submit = () => {
      this.queryString = this.$searchBox.value.split(/\W+/g).join('+');
      if (this.queryString !== '') {
        this.broadcast(events.search);
      }
    };

    this.$searchBox.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.$searchButton.disabled = _trim(this.$searchBox.value) === '';
      const ENTER = 13;
      if (e.keyCode === ENTER) {
        submit();
      }
    });
    this.$searchButton.onclick = submit;
  }

  addSubmitSearchEventListener(listener) {
    this.addObserver(events.search, listener);
  }

  getQueryString() {
    return this.queryString;
  }
}

export default SearchBox;