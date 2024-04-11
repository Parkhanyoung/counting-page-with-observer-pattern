import Component from "./common/Component.js";

export default class Counter extends Component {
  #countState;

  constructor(targetId, countState) {
    super(targetId);
    this.#countState = countState;
  }

  _template() {
    return `
      <div>
        <button id="increment-button">+</button>
        <button id="decrement-button">-</button>
      </div>
    `;
  }

  _setEvent() {
    const incrementButton = document.getElementById("increment-button");
    const decrementButton = document.getElementById("decrement-button");

    incrementButton.addEventListener("click", () => {
      const currentCount = this.#countState.get();
      this.#countState.set(currentCount + 1);
    });

    decrementButton.addEventListener("click", () => {
      const currentCount = this.#countState.get();
      this.#countState.set(currentCount - 1);
    });
  }
}
