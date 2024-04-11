import Observer from "./Observer.js";

export default class Component extends Observer {
  #targetId;

  constructor(targetId) {
    super();
    this.#targetId = targetId;
  }

  initialize() {
    this._render();
    this._setEvent();
  }

  update() {
    this._render();
  }

  _render() {
    const target = document.getElementById(this.#targetId);
    target.innerHTML = this._template();
  }

  _template() {
    throw new Error("not implemented!");
  }

  _setEvent() {}
}
