export default class Observable {
  #observers = [];

  addObserver(observer) {
    this.#observers = [...this.#observers, observer];
  }

  notify() {
    this.#observers.forEach((observer) => observer.update());
  }
}
