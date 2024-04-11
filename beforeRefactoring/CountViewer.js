import Component from "./Component.js";

export default class CountViewer extends Component {
  #count = 0;

  _template() {
    return `
      <div>
        <p>💡 Count: ${this.#count}</p>
      </div>
    `;
  }

  _setEvent() {
    const incrementButton = document.getElementById("increment-button");
    const decrementButton = document.getElementById("decrement-button");

    incrementButton.addEventListener("click", () => {
      this.#count += 1;
      this._render();
    });

    decrementButton.addEventListener("click", () => {
      this.#count -= 1;
      this._render();
    });
  }
}
