import Counter from "./Counter.js";
import CountViewer from "./CountViewer.js";

const counter = new Counter("counter-target");
const countViewer = new CountViewer("count-viewer-target");

counter.initialize();
countViewer.initialize();
