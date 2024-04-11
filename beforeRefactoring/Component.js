export default class Component {
  #targetId;

  constructor(targetId) {
    this.#targetId = targetId;
  }

  initialize() {
    this._render();
    this._setEvent();
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
