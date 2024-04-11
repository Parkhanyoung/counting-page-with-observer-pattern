import Component from "./common/Component.js";

export default class CountViewer extends Component {
  #countState;

  constructor(targetId, countState) {
    super(targetId);
    this.#countState = countState;
  }

  _template() {
    const count = this.#countState.get();

    return `
      <div>
        <p>💡 Count: ${count}</p>
      </div>
    `;
  }
}
