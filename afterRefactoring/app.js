import State from "./common/State.js";
import Counter from "./Counter.js";
import CountViewer from "./CountViewer.js";

const countState = new State(0);

const counter = new Counter("counter-target", countState);
const countViewer = new CountViewer("count-viewer-target", countState);

counter.initialize();
countViewer.initialize();

countState.addObserver(countViewer);
