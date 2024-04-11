import Component from "./Component.js";

export default class Counter extends Component {
  _template() {
    return `
      <div>
        <button id="increment-button">+</button>
        <button id="decrement-button">-</button>
      </div>
    `;
  }
}
