import Observable from "./Observable.js";

export default class State extends Observable {
  #value;

  constructor(value) {
    super();
    this.#value = value;
  }

  set(value) {
    this.#value = value;
    this.notify();
  }

  get() {
    return this.#value;
  }
}
