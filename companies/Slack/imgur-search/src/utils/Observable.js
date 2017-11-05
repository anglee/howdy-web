class Observable {
  constructor() {
    this.observers = new Map();
  }

  addObserver(event, observer) {
    if (!this.observers.has(event)) {
      this.observers.set(event, []);
    }
    this.observers.get(event).push(observer);
  }

  broadcast(event, payload) {
    const observers = this.observers.get(event);
    if (observers) {
      observers.forEach(observer => { observer(payload); });
    }
  }
}

export default Observable;